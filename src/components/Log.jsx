export default function Log({Truns}){
    return (
        <ol id="log">
            {Truns.map(trun => (<li key={`${trun.square.row} ${trun.square.col}`}>{trun.player} Selected {trun.square.row}, {trun.square.col}</li>))}
        </ol>
    )
}