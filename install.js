module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: ".",
        message: [
          "uv pip install -r requirements-csm.txt",
          "uv pip install gradio"
        ],
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "."
        }
      }
    },
    {
      method: "input",
      params: {
        title: "HuggingFace Login Required",
        description: "Before starting, run 'huggingface-cli login' in your terminal to authenticate with HuggingFace. CSM models require gated access."
      }
    },
  ]
}
