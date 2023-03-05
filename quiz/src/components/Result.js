export default function Result({score, total, reset}){
    return(
        <>
            <div className="result-container">
                <span>
                    Thank you for attending the quiz!
                </span>
                <span>
                    You got
                </span>
                <span className="score">
                    {score}/{total}
                </span>
                <button className="retry" onClick={reset}>Retry</button>
            </div>
        </>
    );
}