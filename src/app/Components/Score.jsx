export default function Score({myScore, cpuScore}){
    return(
        <div className="score">
            <h3>Score</h3>
            <div>
                <p>Your Score: {myScore}</p>
                <p>CPU Score: {cpuScore}</p>
            </div>
        </div>
    )
}