import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Header() {
  return (
    <Stack direction="horizontal">
      <div className="p-4 md-6" style={{ fontSize: "20px" }}>
        Start Bootstrap
      </div>
      <div className=" ms-auto">
        <Button variant="primary" size="lg" style={{ marginRight: "50px" }}>
          Sign Up
        </Button>{" "}
      </div>
    </Stack>
  );
}

export { Header };
