import { Button } from "../atoms/Button";

export function OverlayComfirm({ onYes, onNot }) {
  return (
    <div className="overlayEdit">
      <h3>¿Estas Seguro?</h3>
      <span style={{ display: 'flex', gap: '2em' }}>

        <Button color="green" onClick={onYes}>
          Si
        </Button>
        <Button color="red" onClick={onNot}>
          No
        </Button>
      </span>
    </div>
  );
}
