import { Download, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState } from "react";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Resume = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      id="resume"
      className="py-20 bg-gradient-to-b from-white to-lavender-blush/10"
      variants={pageVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-800 mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-mist to-lavender-blush mx-auto mb-8"></div>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            View or download my complete resume showcasing my academic
            achievements, experience, and professional skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8">
              {/* Resume Preview */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 mb-8 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink-mist/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="text-pink-mist" size={32} />
                  </div>
                  <p className="font-inter text-gray-600 mb-4">
                    Click the buttons below to view my resume inline or
                    download the PDF
                  </p>
                  {/* Mock Resume Content Preview */}
                  <div className="bg-white rounded-lg p-6 shadow-md text-left max-w-md mx-auto mb-6">
                    <h4 className="font-poppins font-bold text-lg text-gray-800 mb-2">
                      Melani Lewes
                    </h4>
                    <p className="font-inter text-sm text-gray-600 mb-3">
                      Global Affairs Graduate
                    </p>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="font-inter text-xs text-gray-500">
                        Education • Experience • Skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download & View Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild size="lg">
                  <a
                    href="https://drive.google.com/file/d/1MxOSvJdAVbVKarCLykNWGoI6cpCG9SP4/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-mist text-white px-8 py-3 rounded-full transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-mist focus:ring-offset-2"
                  >
                    <Download size={20} />
                    Download PDF Resume
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-2 border-pink-mist text-pink-mist px-8 py-3 rounded-full transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-mist focus:ring-offset-2"
                  >
                    <ExternalLink size={20} />
                    View Inline
                  </button>
                </Button>
              </div>

              {/* Modal for inline PDF */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-3xl w-full p-0">
                  <embed
                    src="/assets/docs/resume.pdf#view=FitH"
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
