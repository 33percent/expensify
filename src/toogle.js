let visib = false
const myhandler = (e) => {
  visib = visib == false ? true : false;

  finalrendering();
}
const finalrendering = () => {
const myjsx = (
  <div>
  <h1>My toggle app</h1>
  <button onClick={myhandler}>{visib ? "Hide" : "Show"}</button>
  </div>
)
ReactDOM.render(myjsx,document.getElementById('app'))
}
finalrendering();
