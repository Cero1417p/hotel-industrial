export default function LoadingSpinner() {
  return (
    <span className="relative inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-800 border-t-transparent border-r-transparent after:absolute after:left-0 after:top-0 after:h-10 after:w-10 after:animate-[rotationBack_0.5s_linear_infinite] after:rounded-full after:border-4 after:border-b-red-600 after:border-l-red-600 after:border-t-transparent after:border-r-transparent before:absolute before:left-0 before:top-0 before:h-8 before:w-8 before:animate-[rotation_1.5s_linear_infinite] before:rounded-full before:border-4 before:border-gray-800 before:border-t-transparent before:border-r-transparent">
    </span>
  );
}