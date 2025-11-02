import Link from 'next/link';
import { Button } from '@/registry/new-york/ui/button';
import { Badge } from '@/registry/new-york/ui/badge';
import { Sparkles, Palette, Code, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Icons and badges */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Modern Components
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <Palette className="w-4 h-4 mr-2 inline" />
            Fully Customizable
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <Code className="w-4 h-4 mr-2 inline" />
            TypeScript Ready
          </Badge>
        </div>

        {/* Main title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
            Welcome to my Custom UI library
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Beautiful, accessible components built with React and Tailwind CSS.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <Sparkles className="w-8 h-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold mb-2">Production Ready</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Battle-tested components used in real-world applications
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <Palette className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
            <h3 className="font-semibold mb-2">Beautiful Design</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Carefully crafted with attention to detail and aesthetics
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <Code className="w-8 h-8 mx-auto mb-3 text-purple-600" />
            <h3 className="font-semibold mb-2">Developer Friendly</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Fully typed, composable, and easy to customize
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
