import { ImSpinner8 } from 'react-icons/all';
const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen text-white">
            <ImSpinner8 className="w-16 h-16 animate-spin" />
        </div>
    );
};
export default Loading;
