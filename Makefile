SHELL = /bin/bash
.SUFFIXES:
CPRP = cp -rp
REN = mv -i
RM = rm -f
RMRF = rm -rf
touch = touch $(1)

ifeq ($(OS),Windows_NT)
    SHELL = cmd
    CPRP = powershell -Command robocopy /E /DCOPY:DAT /V /ETA
    REN = ren
    RM = del /Q
    RMRF = rmdir /S /Q
    touch = type nul > $(1)
endif

ifeq ($(shell uname),Darwin)
    CPRP = cp -rpc
endif

GIT = git
NPM = npm
NPM_CI_FLAG = ci
NPX = npx

.PHONY: build
build:
	$(NPX) next build

.PHONY: lint
lint:
	$(NPX) tsc
	$(NPX) next lint

.PHONY: lint-fix
lint-fix:
	$(NPX) next lint --fix

.PHONY: bundle-analyzer
bundle-analyzer:
    ifeq ($(OS), Windows_NT)
	set BUNDLE_ANALYZER=1; $(MAKE) build
    else
	BUNDLE_ANALYZER=1 $(MAKE) build
    endif
