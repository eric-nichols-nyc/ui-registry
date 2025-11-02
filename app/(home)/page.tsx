import Link from 'next/link';
import { Button } from '@/registry/new-york/ui/button';
import { Badge } from '@/registry/new-york/ui/badge';
import { Sparkles, Palette, Code, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center flex-1 min-h-screen bg-black px-4">
      {/* Very subtle gradient at the top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-linear-to-b from-indigo-950/20 via-blue-950/10 to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto space-y-8 z-10">
        {/* Icons and badges */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-slate-900 text-slate-300 border-slate-800">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Modern Components
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-slate-900 text-slate-300 border-slate-800">
            <Palette className="w-4 h-4 mr-2 inline" />
            Fully Customizable
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-slate-900 text-slate-300 border-slate-800">
            <Code className="w-4 h-4 mr-2 inline" />
            TypeScript Ready
          </Badge>
        </div>

        {/* Main title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
            Welcome to my Custom UI library
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
            Beautiful, accessible components built with React, Tailwind CSS, and shadcn/ui.
            Start building amazing interfaces today.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <Button
            size="lg"
            className="w-full sm:w-[400px] h-14 text-lg font-semibold bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/docs" className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Browse Components
            </Link>
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-900">
          <div className="p-6 rounded-lg bg-slate-950/50 backdrop-blur-sm border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition-all">
            <Sparkles className="w-8 h-8 mx-auto mb-3 text-blue-500" />
            <h3 className="font-semibold mb-2 text-white">Production Ready</h3>
            <p className="text-sm text-slate-400">
              Battle-tested components used in real-world applications
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-950/50 backdrop-blur-sm border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition-all">
            <Palette className="w-8 h-8 mx-auto mb-3 text-indigo-500" />
            <h3 className="font-semibold mb-2 text-white">Beautiful Design</h3>
            <p className="text-sm text-slate-400">
              Carefully crafted with attention to detail and aesthetics
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-950/50 backdrop-blur-sm border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition-all">
            <Code className="w-8 h-8 mx-auto mb-3 text-purple-500" />
            <h3 className="font-semibold mb-2 text-white">Developer Friendly</h3>
            <p className="text-sm text-slate-400">
              Fully typed, composable, and easy to customize
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
