BIN = node_modules/.bin

.PHONY: bootstrap lint

bootstrap:
	yarn

lint:
	$(BIN)/standard

