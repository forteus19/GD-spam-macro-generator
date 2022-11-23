const format_input = document.getElementById("format_input");
const fps_input = document.getElementById("fps_input");
const clicks_input = document.getElementById("clicks_input");
const cpf_input = document.getElementById("cpf_input");
const p1_input = document.getElementById("p1_input");
const p2_input = document.getElementById("p2_input");
const swift_input = document.getElementById("swift_input");
const generate_button = document.getElementById("generate_button");
const output_textarea = document.getElementById("output_textarea");

var macro = "";

cpf_input.value = 1;
cpf_input.min = 1;

p1_input.checked = true;

swift_input.addEventListener("change", function () {
  if (swift_input.checked) {
    cpf_input.disabled = false;
  } else {
    cpf_input.disabled = true;
  }
});

generate_button.addEventListener("click", function () {
  switch (format_input.value) {
    case "plaintext":
      macro = dumpPlainText(
        fps_input.value,
        clicks_input.value,
        cpf_input.value,
        swift_input.checked,
        p1_input.checked,
        p2_input.checked
      );
      output_textarea.textContent = macro;
      saveAs(new File([macro], "output.txt", { type: "text/plain" }));
      break;
    case "mhrjson":
      macro = dumpMHRJson(
        fps_input.value,
        clicks_input.value,
        cpf_input.value,
        swift_input.checked,
        p1_input.checked,
        p2_input.checked
      );
      output_textarea.textContent = macro;
      saveAs(
        new File([macro], "output.mhr.json", { type: "application/json" })
      );
      break;
    case "echo":
      macro = dumpEcho(
        fps_input.value,
        clicks_input.value,
        cpf_input.value,
        swift_input.checked,
        p1_input.checked,
        p2_input.checked
      );
      output_textarea.textContent = macro;
      saveAs(new File([macro], "output.echo", { type: "application/json" }));
      break;
  }
});
