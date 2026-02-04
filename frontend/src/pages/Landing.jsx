import { useState } from 'react';
import { Leaf, Calendar, TrendingUp, DollarSign, Camera, BarChart3, MapPin, Shield, Sun, Droplets, ArrowRight, Check, Globe, Users, Heart, TrendingDown, AlertTriangle } from 'lucide-react';

const SmartKrishiLanding = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      nav: {
        features: "Features",
        howItWorks: "How It Works",
        benefits: "Benefits",
        getStarted: "Get Started"
      },
      hero: {
        title: "SmartKrishi",
        subtitle: "Empowering Farmers with AI-Powered Intelligence",
        description: "Revolutionary agricultural platform that combines artificial intelligence, real-time market data, and smart analytics to transform farming into a profitable, data-driven enterprise.",
        cta: "Start Your Smart Farming Journey",
        stats: [
          { value: "95%", label: "Disease Detection Accuracy" },
          { value: "40%", label: "Average Profit Increase" },
          { value: "24/7", label: "Real-time Support" }
        ]
      },
      farmerImportance: {
        title: "Farmers: The Backbone of India",
        subtitle: "Understanding the critical challenges faced by our farming community",
        description: "India's 140+ million farmers feed a nation of 1.4 billion people. Yet, they face unprecedented challenges that threaten their livelihoods and our food security.",
        challenges: [
          {
            icon: TrendingDown,
            title: "Late Disease Detection",
            stat: "30-40%",
            description: "Crop losses due to diseases detected too late, costing farmers lakhs annually"
          },
          {
            icon: AlertTriangle,
            title: "Pesticide Misuse",
            stat: "₹15,000+",
            description: "Average unnecessary expenditure on pesticides based on guesswork, not science"
          },
          {
            icon: DollarSign,
            title: "Poor Market Prices",
            stat: "25-30%",
            description: "Lower earnings due to lack of real-time market intelligence and MSP awareness"
          },
          {
            icon: Users,
            title: "Limited Tech Access",
            stat: "Only 15%",
            description: "Of farmers have access to modern agricultural technology and expert guidance"
          }
        ],
        solution: {
          title: "SmartKrishi: Technology Designed for Farmers",
          description: "We believe every farmer deserves access to the same advanced technology used by large agribusinesses. SmartKrishi brings AI-powered crop analysis, market intelligence, and expert recommendations directly to farmers' smartphones - in their own language, at their fingertips."
        }
      },
      services: {
        title: "Comprehensive Agricultural Solutions",
        subtitle: "Everything you need for modern, intelligent farming",
        items: [
          {
            icon: Camera,
            title: "AI Crop Disease Detection",
            description: "Advanced deep learning models analyze your crop images instantly. Upload photos of leaves or plants, and receive immediate diagnosis with disease identification, severity assessment, and treatment recommendations within seconds.",
            features: ["Instant AI Analysis", "95%+ Accuracy", "Treatment Guidance", "Visual Comparison"],
            image: "/Ai_farming.jpg"
          },
          {
            icon: Calendar,
            title: "Smart Farming Calendar",
            description: "Automated scheduling system tailored to your crops. Get personalized reminders for irrigation, fertilizer application, pesticide spraying, and optimal harvesting times based on crop type, sowing date, and local weather conditions.",
            features: ["Auto Scheduling", "SMS Alerts", "Weather Integration", "Custom Timings"],
            image: "/farming_calender.jpg"
          },
          {
            icon: TrendingUp,
            title: "Market Intelligence & Mandi Prices",
            description: "Real-time access to agricultural market data. Compare prices across multiple mandis, check government MSP rates, track price trends, and identify the most profitable selling locations for your produce.",
            features: ["Live Mandi Rates", "MSP Information", "Price Trends", "Best Market Finder"],
            image: "/market_access.jpg"
          },
          {
            icon: DollarSign,
            title: "Intelligent Profit Estimation",
            description: "Comprehensive financial planning tool that calculates total input costs, predicts expected yield based on crop health data, estimates revenue at current market prices, and provides detailed profit-loss analysis before harvesting.",
            features: ["Cost Tracking", "Yield Prediction", "Revenue Forecast", "ROI Analysis"],
            image: "/farmer4.jpg"
          },
          {
            icon: BarChart3,
            title: "Crop Health Tracking",
            description: "Continuous monitoring system with historical analysis. Upload images periodically to track crop progress over time, detect new diseases early, compare growth patterns, and receive health scores with visual progress reports.",
            features: ["Progress Tracking", "Health Scores", "Trend Analysis", "Early Warnings"],
            image: "/crop_health.jpg"
          },
          {
            icon: Shield,
            title: "Pesticide & Medicine Advisor",
            description: "Expert recommendations for crop treatment. Get precise pesticide suggestions, correct dosage information, safe application methods, and links to nearby agricultural stores or online purchase options.",
            features: ["Smart Recommendations", "Dosage Calculator", "Store Locator", "Safety Guidelines"],
            image: "/watering1.jpg"
          }
        ]
      },
      realImpact: {
        title: "Real Farmers, Real Impact",
        subtitle: "See how SmartKrishi is transforming lives across India",
        testimonials: [
          {
            name: "Ramesh Kumar",
            location: "Punjab",
            crop: "Wheat & Rice",
            image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&h=300&fit=crop&crop=faces",
            quote: "SmartKrishi detected wheat rust disease 2 weeks early. Saved my entire crop worth ₹3 lakhs!",
            improvement: "40% profit increase"
          },
          {
            name: "Sunita Devi",
            location: "Maharashtra",
            crop: "Cotton",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=faces",
            quote: "The mandi price alerts helped me sell at the right time. Got ₹500 more per quintal!",
            improvement: "₹45,000 extra income"
          },
          {
            name: "Suresh Patel",
            location: "Gujarat",
            crop: "Vegetables",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
            quote: "Reduced pesticide costs by 60% using AI recommendations. Now I farm smarter, not harder!",
            improvement: "₹20,000 saved annually"
          }
        ]
      },
      howItWorks: {
        title: "How SmartKrishi Works",
        subtitle: "Three simple steps to smarter farming",
        steps: [
          {
            number: "01",
            title: "Register Your Crop",
            description: "Start by registering your crop details including crop name, sowing date, location, and soil type. This helps our AI understand your specific farming context.",
            image: "/different_crops.jpg"
          },
          {
            number: "02",
            title: "Upload & Analyze",
            description: "Take photos of your crops using your smartphone. Our advanced AI models analyze the images in real-time to detect diseases, pests, or nutrient deficiencies with 95%+ accuracy.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          },
          {
            number: "03",
            title: "Get Smart Recommendations",
            description: "Receive instant treatment suggestions, farming schedules, market insights, and profit estimations. Make informed decisions backed by data and AI intelligence.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
          }
        ]
      },
      whyChoose: {
        title: "Why Choose SmartKrishi?",
        reasons: [
          {
            icon: Leaf,
            title: "Early Disease Detection",
            description: "Catch crop diseases before they spread and cause major damage"
          },
          {
            icon: DollarSign,
            title: "Maximize Profits",
            description: "Optimize input costs and find the best market prices for your crops"
          },
          {
            icon: Sun,
            title: "Weather-Smart Farming",
            description: "Receive recommendations adjusted for local weather conditions"
          },
          {
            icon: MapPin,
            title: "Location-Based Insights",
            description: "Get mandi prices and advice specific to your geographic area"
          },
          {
            icon: Droplets,
            title: "Optimize Resources",
            description: "Reduce water, fertilizer, and pesticide waste with precise guidance"
          },
          {
            icon: BarChart3,
            title: "Data-Driven Decisions",
            description: "Make farming choices based on AI analysis, not guesswork"
          }
        ]
      },
      technology: {
        title: "Powered by Advanced AI Technology",
        subtitle: "State-of-the-art machine learning and computer vision",
        features: [
          "Convolutional Neural Networks (CNN) for disease classification",
          "Deep learning models trained on thousands of crop images",
          "Real-time image processing with OpenCV",
          "Integration with weather APIs for smart scheduling",
          "Cloud-based scalable architecture"
        ]
      },
      cta: {
        title: "Ready to Transform Your Farming?",
        subtitle: "Join thousands of farmers already using SmartKrishi to increase their yields and profits",
        button: "Login with Google",
        note: "Free to get started • No credit card required"
      }
    },
    hi: {
      nav: {
        features: "सुविधाएं",
        howItWorks: "कैसे काम करता है",
        benefits: "लाभ",
        getStarted: "शुरू करें"
      },
      hero: {
        title: "स्मार्टकृषि",
        subtitle: "AI-संचालित बुद्धिमत्ता से किसानों को सशक्त बनाना",
        description: "क्रांतिकारी कृषि मंच जो कृत्रिम बुद्धिमत्ता, वास्तविक समय बाजार डेटा और स्मार्ट विश्लेषण को जोड़कर खेती को लाभदायक, डेटा-संचालित उद्यम में बदलता है।",
        cta: "अपनी स्मार्ट खेती की यात्रा शुरू करें",
        stats: [
          { value: "95%", label: "रोग पहचान सटीकता" },
          { value: "40%", label: "औसत लाभ वृद्धि" },
          { value: "24/7", label: "वास्तविक समय सहायता" }
        ]
      },
      farmerImportance: {
        title: "किसान: भारत की रीढ़",
        subtitle: "हमारे कृषक समुदाय के सामने आने वाली महत्वपूर्ण चुनौतियों को समझना",
        description: "भारत के 140+ मिलियन किसान 1.4 बिलियन लोगों के देश को भोजन देते हैं। फिर भी, वे अभूतपूर्व चुनौतियों का सामना करते हैं जो उनकी आजीविका और हमारी खाद्य सुरक्षा को खतरे में डालती हैं।",
        challenges: [
          {
            icon: TrendingDown,
            title: "देर से रोग की पहचान",
            stat: "30-40%",
            description: "बहुत देर से पता चली बीमारियों के कारण फसल का नुकसान, किसानों को सालाना लाखों का नुकसान"
          },
          {
            icon: AlertTriangle,
            title: "कीटनाशकों का दुरुपयोग",
            stat: "₹15,000+",
            description: "विज्ञान के बजाय अनुमान के आधार पर कीटनाशकों पर अनावश्यक औसत खर्च"
          },
          {
            icon: DollarSign,
            title: "खराब बाजार मूल्य",
            stat: "25-30%",
            description: "वास्तविक समय बाजार खुफिया और MSP जागरूकता की कमी के कारण कम कमाई"
          },
          {
            icon: Users,
            title: "सीमित तकनीकी पहुंच",
            stat: "केवल 15%",
            description: "किसानों के पास आधुनिक कृषि तकनीक और विशेषज्ञ मार्गदर्शन तक पहुंच है"
          }
        ],
        solution: {
          title: "स्मार्टकृषि: किसानों के लिए डिज़ाइन की गई तकनीक",
          description: "हम मानते हैं कि हर किसान बड़े कृषि व्यवसायों द्वारा उपयोग की जाने वाली उन्नत तकनीक तक पहुंच का हकदार है। स्मार्टकृषि AI-संचालित फसल विश्लेषण, बाजार खुफिया और विशेषज्ञ सिफारिशों को सीधे किसानों के स्मार्टफोन पर लाता है - उनकी अपनी भाषा में, उनकी उंगलियों पर।"
        }
      },
      services: {
        title: "व्यापक कृषि समाधान",
        subtitle: "आधुनिक, बुद्धिमान खेती के लिए आपको जो कुछ भी चाहिए",
        items: [
          {
            icon: Camera,
            title: "AI फसल रोग पहचान",
            description: "उन्नत डीप लर्निंग मॉडल तुरंत आपकी फसल की छवियों का विश्लेषण करते हैं। पत्तियों या पौधों की तस्वीरें अपलोड करें, और सेकंडों में रोग पहचान, गंभीरता मूल्यांकन और उपचार सिफारिशों के साथ तत्काल निदान प्राप्त करें।",
            features: ["तत्काल AI विश्लेषण", "95%+ सटीकता", "उपचार मार्गदर्शन", "दृश्य तुलना"],
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
          },
          {
            icon: Calendar,
            title: "स्मार्ट खेती कैलेंडर",
            description: "आपकी फसलों के अनुरूप स्वचालित शेड्यूलिंग सिस्टम। फसल के प्रकार, बुवाई की तारीख और स्थानीय मौसम की स्थिति के आधार पर सिंचाई, उर्वरक आवेदन, कीटनाशक छिड़काव और इष्टतम कटाई के समय के लिए व्यक्तिगत अनुस्मारक प्राप्त करें।",
            features: ["ऑटो शेड्यूलिंग", "SMS अलर्ट", "मौसम एकीकरण", "कस्टम समय"],
            image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
          },
          {
            icon: TrendingUp,
            title: "बाजार खुफिया और मंडी मूल्य",
            description: "कृषि बाजार डेटा तक वास्तविक समय पहुंच। कई मंडियों में कीमतों की तुलना करें, सरकारी MSP दरों की जांच करें, मूल्य रुझानों को ट्रैक करें, और अपनी उपज के लिए सबसे लाभदायक बिक्री स्थानों की पहचान करें।",
            features: ["लाइव मंडी दरें", "MSP जानकारी", "मूल्य रुझान", "सर्वश्रेष्ठ बाजार खोजक"],
            image: "https://images.unsplash.com/photo-1611696426740-7c5ee97df0db?w=400&h=300&fit=crop"
          },
          {
            icon: DollarSign,
            title: "बुद्धिमान लाभ अनुमान",
            description: "व्यापक वित्तीय योजना उपकरण जो कुल इनपुट लागत की गणना करता है, फसल स्वास्थ्य डेटा के आधार पर अपेक्षित उपज की भविष्यवाणी करता है, वर्तमान बाजार मूल्यों पर राजस्व का अनुमान लगाता है, और कटाई से पहले विस्तृत लाभ-हानि विश्लेषण प्रदान करता है।",
            features: ["लागत ट्रैकिंग", "उपज भविष्यवाणी", "राजस्व पूर्वानुमान", "ROI विश्लेषण"],
            image: "https://images.unsplash.com/photo-1554224311-beee2c201c7d?w=400&h=300&fit=crop"
          },
          {
            icon: BarChart3,
            title: "फसल स्वास्थ्य ट्रैकिंग",
            description: "ऐतिहासिक विश्लेषण के साथ निरंतर निगरानी प्रणाली। समय के साथ फसल की प्रगति को ट्रैक करने, नई बीमारियों का जल्द पता लगाने, विकास पैटर्न की तुलना करने और दृश्य प्रगति रिपोर्ट के साथ स्वास्थ्य स्कोर प्राप्त करने के लिए समय-समय पर छवियां अपलोड करें।",
            features: ["प्रगति ट्रैकिंग", "स्वास्थ्य स्कोर", "ट्रेंड विश्लेषण", "प्रारंभिक चेतावनी"],
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
          },
          {
            icon: Shield,
            title: "कीटनाशक और दवा सलाहकार",
            description: "फसल उपचार के लिए विशेषज्ञ सिफारिशें। सटीक कीटनाशक सुझाव, सही खुराक जानकारी, सुरक्षित आवेदन विधियां, और आस-पास के कृषि स्टोर या ऑनलाइन खरीद विकल्पों के लिंक प्राप्त करें।",
            features: ["स्मार्ट सिफारिशें", "खुराक कैलकुलेटर", "स्टोर लोकेटर", "सुरक्षा दिशानिर्देश"],
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop"
          }
        ]
      },
      realImpact: {
        title: "वास्तविक किसान, वास्तविक प्रभाव",
        subtitle: "देखें कि कैसे स्मार्टकृषि पूरे भारत में जीवन बदल रहा है",
        testimonials: [
          {
            name: "रमेश कुमार",
            location: "पंजाब",
            crop: "गेहूं और चावल",
            image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&h=300&fit=crop&crop=faces",
            quote: "स्मार्टकृषि ने 2 सप्ताह पहले गेहूं के रतुआ रोग का पता लगाया। ₹3 लाख की मेरी पूरी फसल बचा ली!",
            improvement: "40% लाभ वृद्धि"
          },
          {
            name: "सुनीता देवी",
            location: "महाराष्ट्र",
            crop: "कपास",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=faces",
            quote: "मंडी मूल्य अलर्ट ने मुझे सही समय पर बेचने में मदद की। प्रति क्विंटल ₹500 अधिक मिले!",
            improvement: "₹45,000 अतिरिक्त आय"
          },
          {
            name: "सुरेश पटेल",
            location: "गुजरात",
            crop: "सब्जियां",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
            quote: "AI सिफारिशों का उपयोग करके कीटनाशक लागत 60% कम की। अब मैं स्मार्ट खेती करता हूं, कठिन नहीं!",
            improvement: "₹20,000 सालाना बचत"
          }
        ]
      },
      howItWorks: {
        title: "स्मार्टकृषि कैसे काम करता है",
        subtitle: "स्मार्ट खेती के लिए तीन सरल चरण",
        steps: [
          {
            number: "01",
            title: "अपनी फसल पंजीकृत करें",
            description: "फसल का नाम, बुवाई की तारीख, स्थान और मिट्टी के प्रकार सहित अपनी फसल का विवरण पंजीकृत करके शुरू करें। यह हमारे AI को आपके विशिष्ट खेती के संदर्भ को समझने में मदद करता है।",
            image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop"
          },
          {
            number: "02",
            title: "अपलोड करें और विश्लेषण करें",
            description: "अपने स्मार्टफोन का उपयोग करके अपनी फसलों की तस्वीरें लें। हमारे उन्नत AI मॉडल 95%+ सटीकता के साथ रोगों, कीटों या पोषक तत्वों की कमी का पता लगाने के लिए वास्तविक समय में छवियों का विश्लेषण करते हैं।",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          },
          {
            number: "03",
            title: "स्मार्ट सिफारिशें प्राप्त करें",
            description: "तत्काल उपचार सुझाव, खेती कार्यक्रम, बाजार अंतर्दृष्टि और लाभ अनुमान प्राप्त करें। डेटा और AI बुद्धिमत्ता द्वारा समर्थित सूचित निर्णय लें।",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
          }
        ]
      },
      whyChoose: {
        title: "स्मार्टकृषि क्यों चुनें?",
        reasons: [
          {
            icon: Leaf,
            title: "प्रारंभिक रोग पहचान",
            description: "फसल की बीमारियों को फैलने और बड़े नुकसान से पहले पकड़ें"
          },
          {
            icon: DollarSign,
            title: "लाभ अधिकतम करें",
            description: "इनपुट लागत का अनुकूलन करें और अपनी फसलों के लिए सर्वोत्तम बाजार मूल्य खोजें"
          },
          {
            icon: Sun,
            title: "मौसम-स्मार्ट खेती",
            description: "स्थानीय मौसम की स्थिति के लिए समायोजित सिफारिशें प्राप्त करें"
          },
          {
            icon: MapPin,
            title: "स्थान-आधारित अंतर्दृष्टि",
            description: "अपने भौगोलिक क्षेत्र के लिए विशिष्ट मंडी कीमतें और सलाह प्राप्त करें"
          },
          {
            icon: Droplets,
            title: "संसाधनों का अनुकूलन करें",
            description: "सटीक मार्गदर्शन के साथ पानी, उर्वरक और कीटनाशक के अपव्यय को कम करें"
          },
          {
            icon: BarChart3,
            title: "डेटा-संचालित निर्णय",
            description: "अनुमान के बजाय AI विश्लेषण के आधार पर खेती के विकल्प बनाएं"
          }
        ]
      },
      technology: {
        title: "उन्नत AI तकनीक द्वारा संचालित",
        subtitle: "अत्याधुनिक मशीन लर्निंग और कंप्यूटर विज़न",
        features: [
          "रोग वर्गीकरण के लिए कन्वोल्यूशनल न्यूरल नेटवर्क (CNN)",
          "हजारों फसल छवियों पर प्रशिक्षित डीप लर्निंग मॉडल",
          "OpenCV के साथ वास्तविक समय छवि प्रसंस्करण",
          "स्मार्ट शेड्यूलिंग के लिए मौसम API के साथ एकीकरण",
          "क्लाउड-आधारित स्केलेबल आर्किटेक्चर"
        ]
      },
      cta: {
        title: "अपनी खेती को बदलने के लिए तैयार हैं?",
        subtitle: "हजारों किसान पहले से ही अपनी पैदावार और लाभ बढ़ाने के लिए स्मार्टकृषि का उपयोग कर रहे हैं",
        button: "Google से लॉगिन करें",
        note: "शुरू करने के लिए मुफ्त • कोई क्रेडिट कार्ड आवश्यक नहीं"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-green-50 text-gray-900 font-sans">
      
      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200"
        >
          <Globe className="w-4 h-4 text-green-700" />
          <span className="font-semibold text-green-700">{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#233925]  border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3"> 
              <img 
                src="/logo.png" 
                alt="SmartKrishi Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#features" className="text-white hover:text-green-700 transition">{t.nav.features}</a>
              <a href="#how-it-works" className="text-white  hover:text-green-700 transition">{t.nav.howItWorks}</a>
              <a href="#benefits" className="text-white hover:text-green-700 transition">{t.nav.benefits}</a>
            </div>
            <a href="#cta">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-semibold">
                {t.nav.getStarted}
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(132,204,22,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold">
                AI-Powered Agriculture
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl font-semibold text-green-800">
                {t.hero.subtitle}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta">
                  <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 text-lg font-bold flex items-center justify-center gap-2">
                    {t.hero.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {t.hero.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-green-700">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Farming Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/crop5.webp" 
                    alt="Farmer using smartphone" 
                    className="rounded-2xl shadow-xl w-full h-48 object-cover hov er:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/crop1.jpg" 
                    alt="Healthy crops" 
                    className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/tech1.jpg" 
                    alt="Indian farmer" 
                    className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/crop6.webp" 
                    alt="Crop field" 
                    className="rounded-2xl shadow-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Importance Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {t.farmerImportance.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {t.farmerImportance.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t.farmerImportance.description}
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {t.farmerImportance.challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-100"
                >
                  <Icon className="w-12 h-12 text-red-600 mb-4" />
                  <div className="text-3xl font-black text-red-600 mb-2">{challenge.stat}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  {t.farmerImportance.solution.title}
                </h3>
                <p className="text-lg leading-relaxed text-green-50">
                  {t.farmerImportance.solution.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/crop3.jpg" 
                  alt="Technology for farmers" 
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                />
                <img 
                  src="/tech2.jpg" 
                  alt="Mobile farming" 
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                />
                <img 
                  src="/saling_market.jpg" 
                  alt="Market access" 
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                />
                <img 
                  src="/farmer2.jpg" 
                  alt="Profit growth" 
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Farmers - Our Heroes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              {language === 'en' ? 'Indian Farmers: The Real Heroes of Our Nation' : 'भारतीय किसान: हमारे राष्ट्र के असली नायक'}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'From the fertile fields of Punjab to the cotton farms of Gujarat, from the rice paddies of West Bengal to the spice gardens of Kerala - Indian farmers work tirelessly, often from dawn to dusk, to feed our nation. They are the backbone of our economy, the guardians of our food security, and the true heroes who deserve our respect and support.'
                : 'पंजाब के उपजाऊ खेतों से लेकर गुजरात के कपास फार्मों तक, पश्चिम बंगाल के धान के खेतों से लेकर केरल के मसाला बगीचों तक - भारतीय किसान हमारे राष्ट्र को खिलाने के लिए सुबह से शाम तक अथक परिश्रम करते हैं। वे हमारी अर्थव्यवस्था की रीढ़, हमारी खाद्य सुरक्षा के संरक्षक और असली नायक हैं जो हमारे सम्मान और समर्थन के हकदार हैं।'}
            </p>
          </div>

          {/* Circular Images Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-2xl border-4 border-green-200 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/farmer5.jpg" 
                  alt="Indian farmer working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">
                {language === 'en' ? 'Working the Land' : 'भूमि पर काम'}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Dedicated farmers nurturing crops with care' : 'समर्पित किसान फसलों का पालन-पोषण'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-2xl border-4 border-green-200 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/farmer1.jpg" 
                  alt="Farmer in field" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">
                {language === 'en' ? 'Traditional Wisdom' : 'पारंपरिक ज्ञान'}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Generations of agricultural knowledge' : 'पीढ़ियों का कृषि ज्ञान'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-2xl border-4 border-green-200 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/mordern_farmers.jpg" 
                  alt="Modern farming technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">
                {language === 'en' ? 'Embracing Technology' : 'तकनीक अपनाना'}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Modern farmers using smart tools' : 'स्मार्ट उपकरण उपयोग करते किसान'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-2xl border-4 border-green-200 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/women2.png" 
                  alt="Woman farmer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">
                {language === 'en' ? 'Women in Agriculture' : 'कृषि में महिलाएं'}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Strong women leading the change' : 'परिवर्तन का नेतृत्व करती महिलाएं'}
              </p>
            </div>
          </div>

          {/* Rectangular Images with Text */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/crop2.jpg" 
                  alt="Rice fields" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Growing India\'s Staples' : 'भारत का मुख्य भोजन उगाना'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? 'Indian farmers produce over 120 million tonnes of rice and 110 million tonnes of wheat annually, feeding not just India but contributing to global food security.'
                    : 'भारतीय किसान सालाना 120 मिलियन टन से अधिक चावल और 110 मिलियन टन गेहूं का उत्पादन करते हैं, न केवल भारत को खिलाते हैं बल्कि वैश्विक खाद्य सुरक्षा में योगदान देते हैं।'}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/diversity.jpg" 
                  alt="Diverse crops" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Diversity in Farming' : 'खेती में विविधता'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? 'From spices to pulses, cotton to sugarcane, vegetables to fruits - Indian farmers cultivate an incredible variety of crops across different climates and terrains.'
                    : 'मसालों से लेकर दालों तक, कपास से लेकर गन्ने तक, सब्जियों से लेकर फलों तक - भारतीय किसान विभिन्न जलवायु और इलाकों में फसलों की अविश्वसनीय विविधता उगाते हैं।'}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/crop4.jpg" 
                  alt="Sustainable farming" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Sustainable Future' : 'सतत भविष्य'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? 'Modern Indian farmers are adopting sustainable practices, organic farming, and smart technologies to ensure a greener future while maintaining productivity.'
                    : 'आधुनिक भारतीय किसान उत्पादकता बनाए रखते हुए हरित भविष्य सुनिश्चित करने के लिए टिकाऊ प्रथाओं, जैविक खेती और स्मार्ट तकनीकों को अपना रहे हैं।'}
                </p>
              </div>
            </div>
          </div>

          {/* Farmer Quotes */}
          <div className="bg-gradient-to-r from-green-700 to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-4">"</div>
              <p className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
                {language === 'en' 
                  ? 'The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.'
                  : 'किसान हमारी अर्थव्यवस्था में एकमात्र व्यक्ति है जो सब कुछ खुदरा में खरीदता है, सब कुछ थोक में बेचता है, और दोनों तरफ का भाड़ा देता है।'}
              </p>
              <p className="text-green-200 text-lg">
                {language === 'en' ? '- John F. Kennedy' : '- जॉन एफ. कैनेडी'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Impact - Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {t.realImpact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.realImpact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.realImpact.testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-green-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.crop}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="bg-green-100 px-4 py-2 rounded-full inline-block">
                  <span className="text-green-700 font-bold text-sm">{testimonial.improvement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Life of Indian Farmers */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              {language === 'en' ? 'A Day in the Life of an Indian Farmer' : 'एक भारतीय किसान के जीवन का एक दिन'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Understanding the dedication, hard work, and challenges faced by our farmers every single day'
                : 'हमारे किसानों द्वारा हर दिन सामना की जाने वाली समर्पण, कड़ी मेहनत और चुनौतियों को समझना'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Circular images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-xl border-4 border-amber-200">
                  <img 
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop" 
                    alt="Early morning farming" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {language === 'en' ? '5:00 AM - Dawn begins' : '5:00 AM - भोर शुरू होती है'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'Farmers wake before sunrise to check crops' : 'किसान सूरज उगने से पहले फसलों की जांच के लिए जागते हैं'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-xl border-4 border-amber-200">
                  <img 
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=400&fit=crop" 
                    alt="Midday work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {language === 'en' ? '12:00 PM - Peak work hours' : '12:00 PM - चरम कार्य घंटे'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'Working under the sun, tending to fields' : 'धूप में काम करना, खेतों की देखभाल'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' ? '🌾 Early Morning (5 AM - 9 AM)' : '🌾 सुबह जल्दी (5 AM - 9 AM)'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? 'The farmer wakes up before dawn, prepares equipment, checks irrigation systems, and inspects crops for any overnight damage from pests or weather. This is the coolest part of the day, perfect for heavy physical work.'
                    : 'किसान भोर से पहले उठता है, उपकरण तैयार करता है, सिंचाई प्रणाली की जांच करता है, और कीटों या मौसम से रात भर हुए किसी भी नुकसान के लिए फसलों का निरीक्षण करता है। यह दिन का सबसे ठंडा हिस्सा है, भारी शारीरिक काम के लिए बिल्कुल सही।'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' ? '☀️ Midday (9 AM - 4 PM)' : '☀️ दोपहर (9 AM - 4 PM)'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? 'Plowing, sowing, weeding, or harvesting depending on the season. Farmers often work through extreme heat, with minimal breaks. They also manage fertilizer application, pest control, and continuous monitoring of crop health.'
                    : 'मौसम के आधार पर जुताई, बुवाई, निराई या कटाई। किसान अक्सर अत्यधिक गर्मी में काम करते हैं, न्यूनतम ब्रेक के साथ। वे उर्वरक आवेदन, कीट नियंत्रण और फसल स्वास्थ्य की निरंतर निगरानी भी करते हैं।'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' ? '🌅 Evening (4 PM - 8 PM)' : '🌅 शाम (4 PM - 8 PM)'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? 'Preparing for the next day, maintaining tools and equipment, planning market visits, and managing accounts. Many farmers also attend to livestock and prepare for evening irrigation if needed.'
                    : 'अगले दिन की तैयारी, उपकरण और उपकरणों का रखरखाव, बाजार यात्राओं की योजना, और खातों का प्रबंधन। कई किसान पशुधन की देखभाल भी करते हैं और यदि आवश्यक हो तो शाम की सिंचाई की तैयारी करते हैं।'}
                </p>
              </div>
            </div>
          </div>

          {/* Rectangular images showcase */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" 
                alt="Farmer with technology" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">
                    {language === 'en' ? 'Technology Meets Tradition' : 'तकनीक मिलती है परंपरा से'}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {language === 'en' 
                      ? 'Modern farmers are embracing smartphones and AI to make better farming decisions while preserving traditional agricultural wisdom.'
                      : 'आधुनिक किसान पारंपरिक कृषि ज्ञान को संरक्षित रखते हुए बेहतर खेती के निर्णय लेने के लिए स्मार्टफोन और AI को अपना रहे हैं।'}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop" 
                alt="Lush green fields" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">
                    {language === 'en' ? 'The Pride of Green Fields' : 'हरे खेतों का गौरव'}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {language === 'en' 
                      ? 'Every green field represents months of hard work, dedication, hope, and the farmer\'s unwavering commitment to feeding the nation.'
                      : 'प्रत्येक हरा खेत महीनों की कड़ी मेहनत, समर्पण, आशा और राष्ट्र को खिलाने के लिए किसान की अटूट प्रतिबद्धता का प्रतिनिधित्व करता है।'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-32 left-1/4 right-1/4 h-1 bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300"></div>

            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
                  </div>
                  
                  <div className="p-9 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-black -mt-14 border-4 border-white shadow-lg">
                      {step.number}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SmartKrishi */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {t.whyChoose.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyChoose.reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {t.technology.title}
            </h2>
            <p className="text-xl text-green-200">
              {t.technology.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {t.technology.features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Check className="w-6 h-6 text-green-400 mb-3" />
                <p className="text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-lime-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            {t.cta.title}
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-green-100">
            {t.cta.subtitle}
          </p>
          
          <button className="bg-white text-green-700 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t.cta.button}
          </button>
          
          <p className="mt-6 text-green-100 text-sm">
            {t.cta.note}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="SmartKrishi Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm text-center">
              © 2025 SmartKrishi. {language === 'en' ? 'Empowering farmers with AI technology.' : 'AI तकनीक से किसानों को सशक्त बनाना।'}
            </p>
            
            <p className="text-xs text-gray-500">
              {language === 'en' ? 'Made with' : 'से बनाया गया'} <Heart className="w-3 h-3 inline text-red-500" /> {language === 'en' ? 'for Indian Farmers' : 'भारतीय किसानों के लिए'}
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SmartKrishiLanding;