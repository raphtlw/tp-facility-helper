oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tp-tissuepaper
$ tp-tissuepaper COMMAND
running command...
$ tp-tissuepaper (--version)
tp-tissuepaper/0.0.0 darwin-arm64 node-v20.3.1
$ tp-tissuepaper --help [COMMAND]
USAGE
  $ tp-tissuepaper COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tp-tissuepaper hello PERSON`](#tp-tissuepaper-hello-person)
* [`tp-tissuepaper hello world`](#tp-tissuepaper-hello-world)
* [`tp-tissuepaper help [COMMANDS]`](#tp-tissuepaper-help-commands)
* [`tp-tissuepaper plugins`](#tp-tissuepaper-plugins)
* [`tp-tissuepaper plugins:install PLUGIN...`](#tp-tissuepaper-pluginsinstall-plugin)
* [`tp-tissuepaper plugins:inspect PLUGIN...`](#tp-tissuepaper-pluginsinspect-plugin)
* [`tp-tissuepaper plugins:install PLUGIN...`](#tp-tissuepaper-pluginsinstall-plugin-1)
* [`tp-tissuepaper plugins:link PLUGIN`](#tp-tissuepaper-pluginslink-plugin)
* [`tp-tissuepaper plugins:uninstall PLUGIN...`](#tp-tissuepaper-pluginsuninstall-plugin)
* [`tp-tissuepaper plugins:uninstall PLUGIN...`](#tp-tissuepaper-pluginsuninstall-plugin-1)
* [`tp-tissuepaper plugins:uninstall PLUGIN...`](#tp-tissuepaper-pluginsuninstall-plugin-2)
* [`tp-tissuepaper plugins update`](#tp-tissuepaper-plugins-update)

## `tp-tissuepaper hello PERSON`

Say hello

```
USAGE
  $ tp-tissuepaper hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/raphtlw/tp-tissuepaper/blob/v0.0.0/dist/commands/hello/index.ts)_

## `tp-tissuepaper hello world`

Say hello world

```
USAGE
  $ tp-tissuepaper hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ tp-tissuepaper hello world
  hello world! (./src/commands/hello/world.ts)
```

## `tp-tissuepaper help [COMMANDS]`

Display help for tp-tissuepaper.

```
USAGE
  $ tp-tissuepaper help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tp-tissuepaper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.11/src/commands/help.ts)_

## `tp-tissuepaper plugins`

List installed plugins.

```
USAGE
  $ tp-tissuepaper plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tp-tissuepaper plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `tp-tissuepaper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tp-tissuepaper plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tp-tissuepaper plugins add

EXAMPLES
  $ tp-tissuepaper plugins:install myplugin 

  $ tp-tissuepaper plugins:install https://github.com/someuser/someplugin

  $ tp-tissuepaper plugins:install someuser/someplugin
```

## `tp-tissuepaper plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tp-tissuepaper plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tp-tissuepaper plugins:inspect myplugin
```

## `tp-tissuepaper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tp-tissuepaper plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tp-tissuepaper plugins add

EXAMPLES
  $ tp-tissuepaper plugins:install myplugin 

  $ tp-tissuepaper plugins:install https://github.com/someuser/someplugin

  $ tp-tissuepaper plugins:install someuser/someplugin
```

## `tp-tissuepaper plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tp-tissuepaper plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ tp-tissuepaper plugins:link myplugin
```

## `tp-tissuepaper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tp-tissuepaper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tp-tissuepaper plugins unlink
  $ tp-tissuepaper plugins remove
```

## `tp-tissuepaper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tp-tissuepaper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tp-tissuepaper plugins unlink
  $ tp-tissuepaper plugins remove
```

## `tp-tissuepaper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tp-tissuepaper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tp-tissuepaper plugins unlink
  $ tp-tissuepaper plugins remove
```

## `tp-tissuepaper plugins update`

Update installed plugins.

```
USAGE
  $ tp-tissuepaper plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
