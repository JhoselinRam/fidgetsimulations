import Spreadsheet from "react-spreadsheet"

function ConfigBatchSheet(): JSX.Element {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }]
  ]
  return <Spreadsheet data={data}></Spreadsheet>
}

export default ConfigBatchSheet
