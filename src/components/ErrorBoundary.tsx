import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full h-screen bg-hackathon-bg flex items-center justify-center font-pixel text-white p-4">
          <div className="pixel-card max-w-2xl text-center">
            <h1 className="text-2xl md:text-4xl text-red-500 mb-6">⚠️ SYSTEM ERROR</h1>
            <p className="text-xs md:text-sm text-gray-300 mb-8">
              A glitch has appeared in the system. Please refresh the page or contact support.
            </p>
            <div className="bg-black/40 p-4 border border-red-500/30 mb-8 text-left">
              <p className="text-[8px] md:text-[10px] text-red-400 font-mono break-all">
                {this.state.error?.message || 'Unknown error'}
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="pixel-btn bg-hackathon-primary text-black"
            >
              🔄 RELOAD PAGE
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
