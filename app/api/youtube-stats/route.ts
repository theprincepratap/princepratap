import { NextResponse } from "next/server";

interface CachedStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
  timestamp: number;
}

let cache: CachedStats | null = null;
const CACHE_TTL = 60 * 1000; // Cache for 60 seconds

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return NextResponse.json({ error: "Missing configuration variables" }, { status: 500 });
  }

  // Check memory cache
  const now = Date.now();
  if (cache && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json({
      subscriberCount: cache.subscriberCount,
      viewCount: cache.viewCount,
      videoCount: cache.videoCount,
      cached: true,
    });
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      // Return stale cache if available, otherwise return error
      if (cache) {
        return NextResponse.json({ ...cache, cached: true, stale: true });
      }
      return NextResponse.json({ error: "YouTube API error" }, { status: 502 });
    }

    const data = await res.json();
    const items = data.items ?? [];
    if (!items.length) {
      if (cache) {
        return NextResponse.json({ ...cache, cached: true, stale: true });
      }
      return NextResponse.json({ error: "Channel not found" }, { status: 404 });
    }

    const stats = items[0].statistics;
    const result = {
      subscriberCount: stats.subscriberCount ?? "0",
      viewCount: stats.viewCount ?? "0",
      videoCount: stats.videoCount ?? "0",
    };

    // Update cache
    cache = {
      ...result,
      timestamp: now,
    };

    return NextResponse.json({ ...result, cached: false });
  } catch (error: any) {
    if (cache) {
      return NextResponse.json({ ...cache, cached: true, stale: true });
    }
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
