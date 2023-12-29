export default function Alert({ variant, title, message }) {
    const alertClasses = `
      px-6 py-4 rounded-lg space-y-2 border-2
      ${variant === 'error' ? 'bg-red-100 text-red-700 border-red-700' : ''}
      ${variant === 'success' ? 'bg-green-100 text-green-700 border-green-700' : ''}
    `;
  
    return (
      <div className={alertClasses}>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    );
  }