import { MotionSection } from "@/components/MotionSection";
import { FeedbackForm } from "@/components/FeedbackForm";

export const metadata = {
  title: "Send Feedback | GR FARM",
  description: "Share your feedback about our organic mangoes. Help us improve by rating your experience.",
};

export default function FeedbackPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-leaf-950 text-balance">
            Share Your Feedback
          </h1>
        </MotionSection>

        <MotionSection delay={0.1} className="max-w-2xl mx-auto mb-16">
          <FeedbackForm />
        </MotionSection>

        <MotionSection delay={0.2} className="grid md:grid-cols-2 gap-8 mt-20 border-t border-leaf-200/50 pt-12">
          <div>
            <h3 className="font-display text-2xl text-leaf-900 mb-4">Why Your Feedback Matters</h3>
            <ul className="space-y-3 text-leaf-700">
              <li className="flex gap-3">
                <span className="text-mango-500 font-bold">✓</span>
                <span>Helps us maintain quality standards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-mango-500 font-bold">✓</span>
                <span>Guides our product improvements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-mango-500 font-bold">✓</span>
                <span>Shapes our farm practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-mango-500 font-bold">✓</span>
                <span>Builds our community</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-leaf-900 mb-4">What We'd Like to Know</h3>
            <ul className="space-y-3 text-leaf-700">
              <li className="flex gap-3">
                <span className="text-leaf-500 font-bold">→</span>
                <span>Quality of the mangoes you received</span>
              </li>
              <li className="flex gap-3">
                <span className="text-leaf-500 font-bold">→</span>
                <span>Freshness and taste experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-leaf-500 font-bold">→</span>
                <span>Packaging and delivery experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-leaf-500 font-bold">→</span>
                <span>Any suggestions for improvement</span>
              </li>
            </ul>
          </div>
        </MotionSection>
      </div>
    </main>
  );
}
