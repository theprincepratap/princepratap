import React from 'react'
import CardFlip from '@/components/kokonutui/card-flip'
import ShimmerText from '@/components/kokonutui/shimmer-text'

const MyDetails = () => {
  const projects = [
    {
      title: "RAG Chat Assistant",
      subtitle: "LLM / NLP",
      description: "A retrieval-augmented generation chatbot that answers questions over custom documents using vector search and GPT-4.",
      features: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "Next.js"],
      accentColor: "#ef4444",
      emptyRgba: "rgba(239, 68, 68, 0.12)",
      halfRgba: "rgba(239, 68, 68, 0.40)",
      fullRgba: "rgba(239, 68, 68, 0.80)",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Chatbot/AI
    },
    {
      title: "Image Classifier",
      subtitle: "Deep Learning",
      description: "A CNN-based image classification model trained on custom datasets, achieving 94% accuracy with ResNet50 fine-tuning.",
      features: ["Python", "PyTorch", "ResNet50", "CUDA", "Jupyter", "Matplotlib"],
      accentColor: "#f97316",
      emptyRgba: "rgba(249, 115, 22, 0.12)",
      halfRgba: "rgba(249, 115, 22, 0.40)",
      fullRgba: "rgba(249, 115, 22, 0.80)",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Neural network
    },
    {
      title: "Sentiment Analysis API",
      subtitle: "NLP / BERT",
      description: "Real-time sentiment analysis REST API using fine-tuned BERT model, deployed with Docker on cloud infrastructure.",
      features: ["Python", "HuggingFace", "BERT", "FastAPI", "Docker", "AWS"],
      accentColor: "#a855f7",
      emptyRgba: "rgba(168, 85, 247, 0.12)",
      halfRgba: "rgba(168, 85, 247, 0.40)",
      fullRgba: "rgba(168, 85, 247, 0.80)",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // API/analysis
    },
    {
      title: "Object Detection System",
      subtitle: "Computer Vision",
      description: "Real-time object detection using YOLOv8 for surveillance and smart monitoring, with a React dashboard for live feed.",
      features: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Flask", "React"],
      accentColor: "#22c55e",
      emptyRgba: "rgba(34, 197, 94, 0.12)",
      halfRgba: "rgba(34, 197, 94, 0.40)",
      fullRgba: "rgba(34, 197, 94, 0.80)",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80", // Surveillance/camera
    },
    {
      title: "Recommendation Engine",
      subtitle: "ML / Collaborative",
      description: "A content and collaborative filtering recommendation system for personalized product suggestions with A/B testing.",
      features: ["Python", "Scikit-learn", "Pandas", "NumPy", "Redis", "Next.js"],
      accentColor: "#3b82f6",
      emptyRgba: "rgba(59, 130, 246, 0.12)",
      halfRgba: "rgba(59, 130, 246, 0.40)",
      fullRgba: "rgba(59, 130, 246, 0.80)",
      image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=400&q=80", // Recommendation/graph
    },
  ]

  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}
      className='pb-4 pt-10'
    >
      <div className="flex justify-center flex-col mt-10 mb-8 md:mt-30 md:mb-15">
        <ShimmerText className='text-4xl md:text-6xl' text={"PROJECTS"} />
      </div>
      <div className='flex flex-wrap justify-center gap-6 px-4'>
        {projects.map((item, i) => (
          <div key={i}>
            <CardFlip
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              features={item.features}
              accentColor={item.accentColor}
              emptyRgba={item.emptyRgba}
              halfRgba={item.halfRgba}
              fullRgba={item.fullRgba}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyDetails
