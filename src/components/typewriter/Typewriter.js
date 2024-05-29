import { useEffect, useState } from "react";
function Typewriter({text, typingSpeed = 100, deletingSpeed = 50, duration = 500}){
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() =>{
        const handleTyping = () => {
            if (!isDeleting){
                if (displayedText.length < text[index].length){
                    setDisplayedText((prev) => prev + text[index].charAt(displayedText.length))
                }
                else{
                    setTimeout(() => setIsDeleting(true), duration);
                }
            }
            else{
                if (displayedText.length > 0){
                    setDisplayedText((prev) => prev.slice(0, -1));
                }
                else{
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }

        }

        const timout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timout);
    }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed])

    return(
        <div className="typing-effect">
            {displayedText}
            <span className="caret">|</span>
        </div>
    )
}

export default Typewriter;