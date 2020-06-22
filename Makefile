BIN = node_modules/.bin

.PHONY: bootstrap lint build

bootstrap:
	yarn

build:
	$(BIN)/ncc build index.js

lint:
	$(BIN)/standard

