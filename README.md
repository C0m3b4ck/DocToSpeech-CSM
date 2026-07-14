# DocToSpeech (CSM) <img src=https://github.com/C0m3b4ck/DocToSpeech-csm/blob/main/icon.png> 
[![MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](LICENSE) [![Pinokio](https://img.shields.io/badge/Platform-Pinokio-FF6B35.svg?style=for-the-badge&logo=pinokio&logoColor=white)](https://pinokio.computer)

One-click Pinokio launcher for DocToSpeech with Sesame CSM-1B.

## Included Model

| Model | VRAM | Cloning | Languages | Presets |
|-------|------|---------|-----------|---------|
| Sesame CSM-1B | ~4.5 GB (CUDA) / ~8.5 GB (CPU) | Yes | English | No |

Conversational speech model with Llama backbone. Requires CUDA 12.x and a HuggingFace account with gated model access.

## Requirements

- Python 3.11
- 8 GB RAM minimum, 16 GB+ recommended
- 4.5 GB GPU VRAM (CUDA 12.x required)
- Pinokio
- HuggingFace account (for gated model access)

## Install

1. Open Pinokio
2. Click **Discover**
3. Search for **DocToSpeech (CSM)**
4. Click **Download** then **Install**

Or manually copy this folder to your Pinokio `api/` directory.

**Important:** Before starting the app, run `huggingface-cli login` in your terminal to authenticate. CSM models require gated access from HuggingFace.

## Usage

After installation, Pinokio will show a **Start** button. Click it to launch the Gradio web UI at `http://localhost:7860`.

## Other Versions

| Launcher | Models | Venv |
|----------|--------|------|
| [DocToSpeech (Coqui)](https://github.com/C0m3b4ck/DocToSpeech-coqui) | XTTS v2, Bark, VITS, YourTTS, StyleTTS 2 | Shared |
| [DocToSpeech (Chatterbox)](https://github.com/C0m3b4ck/DocToSpeech-Chatterbox) | Resemble Chatterbox | Separate |
| [DocToSpeech (Tortoise)](https://github.com/C0m3b4ck/DocToSpeech-Tortoise) | Tortoise TTS | Separate |
| [DocToSpeech (OpenVoice)](https://github.com/C0m3b4ck/DocToSpeech-OpenVoice) | OpenVoice V2 | Separate |
| **DocToSpeech (CSM)** (this one) | Sesame CSM-1B | Separate |

## Full Documentation

For CLI usage, batch processing, Ollama sanitization, and more, see the [main DocToSpeech repository](https://github.com/C0m3b4ck/DocToSpeech).

## Credits

Started on July 12th, 2026 by [C0m3b4ck](https://github.com/C0m3b4ck).

### TTS Engine
- [Sesame CSM](https://github.com/SesameAILabs/csm) by Sesame AI -- [Apache 2.0 License](https://github.com/SesameAILabs/csm/blob/main/LICENSE)

### Document Processing
- [epub2txt](https://github.com/aaronsw/html2text)
- [pdftotext](https://github.com/jalan/pdftotext)
- [docx2txt](https://github.com/ankushshah893/docx2txt)
- [html2text](https://github.com/Alir3z4/html2text)

### Other
- [pyfiglet](https://github.com/pwaller/pyfiglet) -- ASCII art
- [tqdm](https://github.com/tqdm/tqdm) -- Progress bars
- [Ollama](https://ollama.com) -- Local LLM for text sanitization

MPL 2.0 License.
