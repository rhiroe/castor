import React from "react";
import { TextField } from "@material-ui/core";

export default class Form extends React.Component {
  render(){
    return(
      <form noValidate autoComplete="off">
        <TextField
          id="date"
          label="登録日"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div>
          <TextField label="肉" />
        </div>
        <div>
          <TextField label="魚" />
        </div>
        <div>
          <TextField label="野菜" />
        </div>
        <div>
          <TextField label="お菓子" />
        </div>
        <div>
          <TextField label="果物" />
        </div>
        <div>
          <TextField label="パン" />
        </div>
        <div>
          <TextField label="果物" />
        </div>
        <div>
          <TextField label="飲料" />
        </div>
        <div>
          <TextField label="その他" />
        </div>
      </form>
    )
  }
}
