# This is my Website

### Pipeline Status

[![pipeline status](http://gitlab.pabler.de/Fl0exe/website/badges/master/pipeline.svg)](http://gitlab.pabler.de/Fl0exe/website/-/commits/master)

Dunno its open source i guess.

# Usage:

docker compose:

```yaml
services:
    website:
        image: fl0exe/website
        ports:
            - 3000:3000
```

docker run:

```bash
docker run -d \
    --name website \
    -p 3000:3000 \
    fl0exe/website
```
