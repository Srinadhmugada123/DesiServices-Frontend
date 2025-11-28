import React from 'react';


// A small reusable fallback UI. You can style this or replace with your own component.
function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div style={{ padding: 20, textAlign: 'center' }}>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left', margin: '10px auto', maxWidth: 600 }}>
                {error && error.toString()}
            </details>
            <button onClick={resetErrorBoundary} style={{ padding: '8px 12px', cursor: 'pointer' }}>
                Try again
            </button>
        </div>
    );
}


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }


    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }


    componentDidCatch(error, info) {
        // You can log the error to an external service here (Sentry, LogRocket, etc.)
        // Example: sendToLoggingService(error, info)
        console.error('ErrorBoundary caught an error', error, info);
    }


    reset = () => {
        // Optional: reset the error boundary to try rendering children again
        this.setState({ hasError: false, error: null });
    };


    render() {
        if (this.state.hasError) {
            // If user provided a fallback component via props, use it.
            if (this.props.FallbackComponent) {
                const Fallback = this.props.FallbackComponent;
                return (
                    <Fallback error={this.state.error} resetErrorBoundary={this.reset} />
                );
            }


            // Default fallback UI
            return <ErrorFallback error={this.state.error} resetErrorBoundary={this.reset} />;
        }


        return this.props.children;
    }
}


export default ErrorBoundary;