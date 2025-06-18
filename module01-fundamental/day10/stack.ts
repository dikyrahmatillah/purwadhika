class TextEditorHistory {
  private text: string[] = [];

  public perform(textInput: string) {
    const [action, value] = textInput.split(":", 2);
    if (action === "tulis") {
      if (this.text.length > 0) {
        this.text.push(this.text[this.text.length - 1] + value);
      } else {
        this.text.push(value);
      }
    }
    if (action === "hapus") {
      const n = this.text.length - 1;
      const text = this.text[n];
      this.text.push(text.slice(0, n - Number(value)));
    }
  }

  getText() {
    return this.text[this.text.length - 1];
  }

  undo() {
    this.text.pop();
  }
}

const editor = new TextEditorHistory();
editor.perform("tulis:hello");
editor.perform("tulis: world");
editor.perform("hapus:6");

console.log(editor.getText());

editor.undo();

console.log(editor.getText()); // hello word
