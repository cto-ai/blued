## Building & Running a Service
```
cd name/service
git pull origin master    # get latest version whether broken or working
ops build .
ops publish .             # mandatory step, does not work at all without publishing
ops start name            # e.g. blued
```

## Rebuilding a Pipeline (takes a long time)
1. update `ops.yml` to be a new version (do this first or you may encounter an error later)
2. make your other changes to `ops.yml`
```
cd name/pipeline
ops build .
ops publish .      # mandatory, it runs in the cloud
ops start name     # e.g. blued-cicd
```

## Running a Pipeline
```
cd name/pipeline
ops start name     # e.g. blued-cicd
```

test22
