export default function ServiceErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="service-error">
            <h3>Unable to show service details</h3>
            <p>Try refreshing or go back to the services list.</p>
            <button onClick={resetErrorBoundary}>Retry</button>
            <button onClick={() => window.location.href = '/'}>Back to Home</button>
        </div>
    );
}



// usage
<ErrorBoundary FallbackComponent={ServiceErrorFallback}>
    <ServiceDetails />
</ErrorBoundary>