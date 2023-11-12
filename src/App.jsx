import { useEffect, useState } from "react";

const App = () => {
  let [data, setdata] = useState()
  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos/2")
      let json = await res.json();
      setdata(json)

    })()
  })

  return (
    <div>
      {
        JSON.stringify(data)

      }

    </div>
  )
}
export default App;