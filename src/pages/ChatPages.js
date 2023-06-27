import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
const ChatPages = () => {
  return (
    <section>
      <h1> Welcome Chatme</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <Button variant="contained" color="success">
        Join
      </Button>
    </section>
  );
};

export default ChatPages;
