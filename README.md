# My Website

A fast and modern website built with **Next.js**, designed for easy deployment and local development.  
This is a personal project, but you're welcome to explore, run, or contribute.

## Pipeline Status

[![pipeline status](http://gitlab.pabler.de/Fl0exe/website/badges/master/pipeline.svg)](http://gitlab.pabler.de/Fl0exe/website/-/commits/master)

Dunno it's open source, I guess

## Usage

### Docker Compose

```yaml
services:
  website:
    image: fl0exe/website
    ports:
      - 3000:3000
```

### Docker Run

```bash
docker run -d \
  --name website \
  -p 3000:3000 \
  fl0exe/website
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Start Dev Server

To install dependencies and run the Next.js dev server:

```bash
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org/)
- [Docker](https://www.docker.com/)

Made with ❤️ by [Flo](http://gitlab.pabler.de/Fl0exe)
