================
CODE SNIPPETS
================

TITLE: Initialize Hexo Project
DESCRIPTION: Commands to initialize a new Hexo project, install dependencies, and navigate into the project directory.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/setup.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init <folder>
cd <folder>
npm install
```

--------------------------------

TITLE: Initialize Hexo Project
DESCRIPTION: Commands to initialize a new Hexo project, navigate into the project directory, and install dependencies.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/setup.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init <folder>
cd <folder>
npm install
```

--------------------------------

TITLE: Initialize Hexo Project
DESCRIPTION: Commands to initialize a new Hexo project, install dependencies, and navigate into the project directory.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/setup.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init <folder>
cd <folder>
npm install
```

--------------------------------

TITLE: Hexo Project Structure
DESCRIPTION: The typical folder structure of a Hexo project after initialization.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/setup.md#_snippet_1>

LANGUAGE: plain
CODE:

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

--------------------------------

TITLE: Initialize Hexo Project
DESCRIPTION: Commands to initialize a new Hexo project in a specified folder, navigate into it, and install dependencies.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/setup.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init <folder>
cd <folder>
npm install
```

--------------------------------

TITLE: Initialize Hexo Site
DESCRIPTION: Commands to initialize a new Hexo site in a specified folder, navigate into it, and install dependencies.

SOURCE: <https://github.com/hexojs/site/blob/master/source/pt-br/docs/setup.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init <folder>
cd <folder>
npm install
```

--------------------------------

TITLE: Hexo Deployer Git Configuration
DESCRIPTION: Configuration example for deploying Hexo sites using the hexo-deployer-git plugin.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_21>

LANGUAGE: javascript
CODE:

```
deploy:
  type: git
  repo: <repository>
  branch: <branch>
```

--------------------------------

TITLE: Clone and Install Site Repository
DESCRIPTION: Steps to clone the Hexo site repository, install dependencies, and start the development server for live previewing.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/contributing.md#_snippet_4>

LANGUAGE: bash
CODE:

```
npm install hexo-cli -g # If you don't have hexo-cli installed
git clone https://github.com/<username>/site.git
cd site
npm install
hexo server
```

--------------------------------

TITLE: Install Edgio CLI
DESCRIPTION: Installs the Edgio CLI globally.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/one-command-deployment.md#_snippet_19>

LANGUAGE: bash
CODE:

```
npm i -g @edgio/cli
```

--------------------------------

TITLE: Install Heroku Deployer Plugin
DESCRIPTION: Installs the `hexo-deployer-heroku` plugin for deploying sites to Heroku.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_6>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-heroku --save
```

--------------------------------

TITLE: Install hexo-deployer-rsync
DESCRIPTION: Installs the hexo-deployer-rsync package using npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_10>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-rsync --save
```

--------------------------------

TITLE: Hexo Project Dependencies
DESCRIPTION: The package.json file lists the project's dependencies, including Hexo core, generators, renderers, and the default theme.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/setup.md#_snippet_2>

LANGUAGE: json
CODE:

```
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

--------------------------------

TITLE: Install Git Deployer Plugin
DESCRIPTION: Installs the `hexo-deployer-git` plugin, which is required for deploying to Git repositories.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_3>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-git --save
```

--------------------------------

TITLE: Basic Hexo Deployment
DESCRIPTION: This command initiates the deployment process for your Hexo site. Ensure you have the necessary deployment plugins installed and configured.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo deploy
```

--------------------------------

TITLE: Hexo Project Structure
DESCRIPTION: The default directory structure of a Hexo project after initialization.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/setup.md#_snippet_1>

LANGUAGE: plain
CODE:

```
. 
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

--------------------------------

TITLE: Install SFTP Deployer
DESCRIPTION: Installs the hexo-deployer-sftp package using npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/one-command-deployment.md#_snippet_13>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-sftp --save
```

--------------------------------

TITLE: Hexo Project Folder Structure
DESCRIPTION: The default folder structure of a Hexo project after initialization.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/setup.md#_snippet_1>

LANGUAGE: plain
CODE:

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

--------------------------------

TITLE: Hexo Project Dependencies (package.json)
DESCRIPTION: The package.json file lists the project's dependencies, including Hexo core, generators, renderers, and the default theme.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/setup.md#_snippet_2>

LANGUAGE: json
CODE:

```
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

--------------------------------

TITLE: Install hexo-deployer-ftpsync
DESCRIPTION: Installs the hexo-deployer-ftpsync package using npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_14>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-ftpsync --save
```

--------------------------------

TITLE: Edgio CLI Installation and Hexo Connector
DESCRIPTION: Commands to install the Edgio CLI globally and then initialize the Hexo connector for deploying Hexo projects to Edgio.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_22>

LANGUAGE: bash
CODE:

```
npm i -g @edgio/cli
```

LANGUAGE: bash
CODE:

```
edgio init --connector=@edgio/hexo
```

--------------------------------

TITLE: Install hexo-deployer-ftpsync
DESCRIPTION: Installs the FTPSync deployer for Hexo. Enables deployment via FTP.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_12>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-ftpsync --save
```

--------------------------------

TITLE: Edgio CLI Installation and Initialization
DESCRIPTION: Commands to install the Edgio CLI globally and initialize the Hexo connector for Edgio deployment.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_20>

LANGUAGE: bash
CODE:

```
npm i -g @edgio/cli
```

LANGUAGE: bash
CODE:

```
edgio init --connector=@edgio/hexo
```

--------------------------------

TITLE: Install FTPSync Deployer
DESCRIPTION: Installs the hexo-deployer-ftpsync package using npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/one-command-deployment.md#_snippet_11>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-ftpsync --save
```

--------------------------------

TITLE: Publishing a Hexo Theme - Setup
DESCRIPTION: Commands to clone the Hexo site repository and install dependencies, a prerequisite for publishing a theme.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/themes.md#_snippet_1>

LANGUAGE: shell
CODE:

```
git clone https://github.com/<username>/site.git\n$ cd site\n$ npm install
```

--------------------------------

TITLE: Edgio CLI Installation and Hexo Connector
DESCRIPTION: Commands to install the Edgio CLI globally and initialize the Hexo connector for Edgio deployment.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_20>

LANGUAGE: bash
CODE:

```
npm i -g @edgio/cli
edgio init --connector=@edgio/hexo
```

--------------------------------

TITLE: Hexo package.json Dependencies
DESCRIPTION: The package.json file lists the project's dependencies, including Hexo core, generators, renderers, and the default theme.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/setup.md#_snippet_2>

LANGUAGE: json
CODE:

```
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

--------------------------------

TITLE: Bip Initialization and Deployment
DESCRIPTION: Commands to initialize a Hexo project for Bip deployment and to generate and deploy the site. Assumes Bip CLI is installed and a Bip domain is set up.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_18>

LANGUAGE: bash
CODE:

```
bip init
hexo generate --deploy && bip deploy
```

--------------------------------

TITLE: Basic Hexo Deployment
DESCRIPTION: The fundamental command to deploy your Hexo site. Ensure you have the necessary deployer plugins installed.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/one-command-deployment.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo deploy
```

--------------------------------

TITLE: Hexo Configuration for PrismJS (v7.0.0+)
DESCRIPTION: Example configuration for enabling PrismJS as the syntax highlighter in Hexo starting from version 7.0.0.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/syntax-highlight.md#_snippet_10>

LANGUAGE: yaml
CODE:

```
# _config.yml
syntax_highlighter: prismjs
prismjs:
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

--------------------------------

TITLE: Hexo Deployment Configuration Examples
DESCRIPTION: Illustrates different ways to configure deployment settings in Hexo's _config.yml file, including single service and multiple service configurations.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_1>

LANGUAGE: yaml
CODE:

```
deploy:
  type: git
```

LANGUAGE: yaml
CODE:

```
deploy:
  - type: git
    repo:
  - type: heroku
    repo:
```

--------------------------------

TITLE: Install Hexo FTPSync Deployer
DESCRIPTION: Installs the hexo-deployer-ftpsync package. This enables deployment via FTPSync.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_13>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-ftpsync --save
```

--------------------------------

TITLE: Install hexo-deployer-rsync
DESCRIPTION: Installs the Rsync deployer for Hexo. This allows deployment via Rsync.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_8>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-rsync --save
```

--------------------------------

TITLE: Install hexo-deployer-sftp
DESCRIPTION: Installs the hexo-deployer-sftp package using npm. Enables SFTP deployment with passwordless SSH key support.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_16>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-sftp --save
```

--------------------------------

TITLE: Install hexo-migrator-wordpress
DESCRIPTION: Installs the hexo-migrator-wordpress plugin for migrating content from WordPress exports.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/migration.md#_snippet_3>

LANGUAGE: bash
CODE:

```
npm install hexo-migrator-wordpress --save
```

--------------------------------

TITLE: Bip Initialization and Deployment
DESCRIPTION: Commands to initialize a Hexo project for Bip deployment and to deploy the generated site. Assumes Bip CLI is installed and a Bip domain is set up.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_17>

LANGUAGE: bash
CODE:

```
bip init
```

LANGUAGE: bash
CODE:

```
hexo generate --deploy && bip deploy
```

--------------------------------

TITLE: Install hexo-migrator-rss
DESCRIPTION: Installs the hexo-migrator-rss plugin for migrating content from RSS feeds.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/migration.md#_snippet_0>

LANGUAGE: bash
CODE:

```
npm install hexo-migrator-rss --save
```

--------------------------------

TITLE: Install hexo-migrator-joomla
DESCRIPTION: Installs the hexo-migrator-joomla plugin for migrating content from Joomla exports.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/migration.md#_snippet_5>

LANGUAGE: bash
CODE:

```
npm install hexo-migrator-joomla --save
```

--------------------------------

TITLE: Install Hexo SFTP Deployer
DESCRIPTION: Installs the hexo-deployer-sftp package, which allows deployment via SFTP, supporting passwordless connections.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_15>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-sftp --save
```

--------------------------------

TITLE: Install Hexo Rsync Deployer
DESCRIPTION: Installs the hexo-deployer-rsync package using npm. This is the first step to enable Rsync deployment for Hexo sites.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_9>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-rsync --save
```

--------------------------------

TITLE: Install hexo-deployer-openshift
DESCRIPTION: Installs the OpenShift deployer for Hexo. Note: This plugin has been deprecated.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_10>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-openshift --save
```

--------------------------------

TITLE: Install hexo-deployer-sftp
DESCRIPTION: Installs the SFTP deployer for Hexo. Supports passwordless connections via ssh-agent.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_14>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-sftp --save
```

--------------------------------

TITLE: Initialize Hexo Project
DESCRIPTION: Initializes a new Hexo website. If the specified folder does not exist, Hexo will set up the site in the current directory. This command clones a starter template and installs dependencies.

SOURCE: <https://github.com/hexojs/site/blob/master/source/pt-br/docs/commands.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init [folder]
```

--------------------------------

TITLE: Initialize Bip Project
DESCRIPTION: Initializes a new project for deployment with Bip.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/one-command-deployment.md#_snippet_16>

LANGUAGE: bash
CODE:

```
bip init
```

--------------------------------

TITLE: Install Hexo OpenShift Deployer
DESCRIPTION: Installs the hexo-deployer-openshift package. Note: This package has been deprecated.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/one-command-deployment.md#_snippet_11>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-openshift --save
```

--------------------------------

TITLE: Install Hexo Git Deployer
DESCRIPTION: Command to install the hexo-deployer-git plugin using npm. This plugin is required for deploying sites to Git-based repositories.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_2>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-git --save
```

--------------------------------

TITLE: Install hexo-deployer-openshift
DESCRIPTION: Installs the hexo-deployer-openshift package using npm. Note: This package has been deprecated.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_12>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-openshift --save
```

--------------------------------

TITLE: Start Hexo Server for Live Preview
DESCRIPTION: Command to start the Hexo development server for live previewing documentation changes.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/contributing.md#_snippet_4>

LANGUAGE: bash
CODE:

```
hexo server
```

--------------------------------

TITLE: Install Hexo Git Deployer
DESCRIPTION: Command to install the hexo-deployer-git plugin using npm. This plugin is required for deploying to Git-based repositories.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_3>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-git --save
```

--------------------------------

TITLE: Hexo Initialization
DESCRIPTION: Initializes a new Hexo site in the specified folder or the current directory. It clones a starter theme and installs dependencies using Yarn, pnpm, or npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/commands.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init [folder]
```

--------------------------------

TITLE: Setting Up Hexo Documentation Development
DESCRIPTION: Instructions for setting up the development environment for Hexo documentation, including installing Hexo CLI and cloning the site repository.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/contributing.md#_snippet_4>

LANGUAGE: bash
CODE:

```
npm install hexo-cli -g # If you don't have hexo-cli installed
git clone https://github.com/<username>/site.git
cd site
npm install
```

--------------------------------

TITLE: Hexo Initialization
DESCRIPTION: Initializes a new Hexo website in a specified folder or the current directory. It clones a starter theme and installs dependencies using Yarn, pnpm, or npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/es/docs/commands.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init [folder]
```

--------------------------------

TITLE: Hexo Initialization
DESCRIPTION: Initializes a new Hexo website in the current directory or a specified folder. It clones a starter theme and installs dependencies using Yarn, pnpm, or npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/commands.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init [folder]
```

--------------------------------

TITLE: Install hexo-migrator-joomla
DESCRIPTION: Installs the hexo-migrator-joomla plugin using npm. This plugin is required for migrating content from Joomla.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/migration.md#_snippet_5>

LANGUAGE: bash
CODE:

```
npm install hexo-migrator-joomla --save
```

--------------------------------

TITLE: Hexo Configuration for highlight.js
DESCRIPTION: Example configuration for enabling highlight.js in Hexo, including settings for line numbers and class prefixes.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/syntax-highlight.md#_snippet_9>

LANGUAGE: yaml
CODE:

```
# _config.yml
highlight:
  enable: false
prismjs:
  enable: true
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

--------------------------------

TITLE: highlight.js HTML Output Example
DESCRIPTION: Demonstrates the HTML output structure when highlight.js is enabled with the `hljs` option, showing `hljs-` prefixed classes.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/syntax-highlight.md#_snippet_11>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Install Hexo Heroku Deployer
DESCRIPTION: Command to install the hexo-deployer-heroku plugin using npm. This plugin is necessary for deploying to Heroku.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_6>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-heroku --save
```

--------------------------------

TITLE: Install hexo-migrator-wordpress
DESCRIPTION: Installs the hexo-migrator-wordpress plugin using npm. This plugin is necessary for migrating content from WordPress.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/migration.md#_snippet_3>

LANGUAGE: bash
CODE:

```
npm install hexo-migrator-wordpress --save
```

--------------------------------

TITLE: Install Hexo Heroku Deployer
DESCRIPTION: Command to install the hexo-deployer-heroku plugin using npm. This plugin is necessary for deploying Hexo sites to Heroku.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_6>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-heroku --save
```

--------------------------------

TITLE: Initialize Hexo Project
DESCRIPTION: Initializes a new Hexo project in the specified folder or the current directory. It clones a starter theme and installs dependencies using Yarn, pnpm, or npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/commands.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init [folder]
```

--------------------------------

TITLE: Hexo Initialization
DESCRIPTION: Initializes a new Hexo website in the specified folder or the current directory. It clones a starter theme and installs dependencies using Yarn, pnpm, or npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/commands.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init [folder]
```

--------------------------------

TITLE: Run Hexo with Local Installation
DESCRIPTION: Demonstrates how to execute Hexo commands when Hexo is installed locally in the project's node_modules.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/index.md#_snippet_2>

LANGUAGE: bash
CODE:

```
npx hexo <command>
```

LANGUAGE: bash
CODE:

```
echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
hexo <command>
```

--------------------------------

TITLE: Deploy with Bip
DESCRIPTION: Generates Hexo site and deploys it using Bip.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/one-command-deployment.md#_snippet_17>

LANGUAGE: bash
CODE:

```
hexo generate --deploy && bip deploy
```

--------------------------------

TITLE: Install hexo-migrator-rss
DESCRIPTION: Installs the hexo-migrator-rss plugin using npm. This plugin is required for migrating content from RSS feeds.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/migration.md#_snippet_0>

LANGUAGE: bash
CODE:

```
npm install hexo-migrator-rss --save
```

--------------------------------

TITLE: Install Hexo CLI
DESCRIPTION: Installs the Hexo command-line interface globally using npm. This is the standard way to install Hexo for general use.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/index.md#_snippet_0>

LANGUAGE: bash
CODE:

```
npm install -g hexo-cli
```

--------------------------------

TITLE: Start Local Server
DESCRIPTION: Starts a local server to preview your website. The default address is <http://localhost:4000/>. You can customize the port, serve only static files, or enable logging.

SOURCE: <https://github.com/hexojs/site/blob/master/source/pt-br/docs/commands.md#_snippet_4>

LANGUAGE: bash
CODE:

```
hexo server
```

LANGUAGE: bash
CODE:

```
hexo server -p 8080
```

LANGUAGE: bash
CODE:

```
hexo server -s
```

LANGUAGE: bash
CODE:

```
hexo server -l
```

--------------------------------

TITLE: Run Hexo with Local Installation
DESCRIPTION: Provides two methods for running Hexo commands after installing it locally. The first uses npx, and the second configures the system's PATH for direct execution.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/index.md#_snippet_2>

LANGUAGE: bash
CODE:

```
npx hexo <command>
```

LANGUAGE: bash
CODE:

```
echo "PATH=\"$$PATH:./node_modules/.bin\"" >> ~/.profile
hexo <command>
```

--------------------------------

TITLE: Clone and Install Site Repository
DESCRIPTION: Steps to clone the Hexo site repository, install dependencies, and set up the Hexo CLI.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/contributing.md#_snippet_3>

LANGUAGE: bash
CODE:

```
npm install hexo-cli -g # If you don't have hexo-cli installed
git clone https://github.com/<username>/site.git
cd site
npm install
```

--------------------------------

TITLE: Hexo Configuration for `line_threshold`
DESCRIPTION: Configuration example for `line_threshold`, which sets a minimum number of lines for line numbers to be displayed.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/syntax-highlight.md#_snippet_13>

LANGUAGE: yaml
CODE:

```
line_threshold: 10
```

--------------------------------

TITLE: full_url_for Example
DESCRIPTION: Provides an example of using `full_url_for` with a configured site URL.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/tag-plugins.md#_snippet_27>

LANGUAGE: YAML
CODE:

```
url: https://example.com/blog # example
```

LANGUAGE: Liquid
CODE:

```
{% full_url_for index /a/path %}
```

LANGUAGE: HTML
CODE:

```
<a href="https://example.com/blog/a/path">index</a>
```

--------------------------------

TITLE: Bip Initialization and Deployment
DESCRIPTION: Commands to initialize a project with Bip and deploy a Hexo site. Bip automatically detects Hexo and configures the project for deployment.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_19>

LANGUAGE: bash
CODE:

```
bip init
```

LANGUAGE: bash
CODE:

```
hexo generate --deploy && bip deploy
```

--------------------------------

TITLE: Initialize Hexo Website
DESCRIPTION: Initializes a new Hexo website in the current or a specified directory by cloning the hexo-starter repository and installing dependencies.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/commands.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init [folder]
```

--------------------------------

TITLE: Serving Hexo Documentation Locally
DESCRIPTION: Command to start a local server to preview documentation changes in real-time.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/contributing.md#_snippet_5>

LANGUAGE: bash
CODE:

```
hexo server
```

--------------------------------

TITLE: Hexo Theme Configuration Example
DESCRIPTION: An example YAML configuration file for a Hexo theme, including description, repository link, preview URL, and tags.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/themes.md#_snippet_2>

LANGUAGE: yaml
CODE:

```
description: A brand new default theme for Hexo.\nlink: https://github.com/hexojs/hexo-theme-landscape\npreview: http://hexo.io/hexo-theme-landscape\ntags:\n  - official\n  - responsive\n  - widget\n  - two_column\n  - one_column
```

--------------------------------

TITLE: Netlify Deployment Overview
DESCRIPTION: Information about Netlify as a deployment platform, highlighting its features like continuous deployment, CDN, DNS, and automated HTTPS. It also mentions deployment via web UI, CLI, and a 'Deploy to Netlify' button.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_9>

LANGUAGE: markdown
CODE:

```
[Netlify](https://www.netlify.com/) provides continuous deployment (Git-triggered builds), an intelligent global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and a lot more. It is a unified platform that automates your code to create high-performance, easily maintainable sites and web apps.

There are two different ways to deploy your sites on Netlify. The most common way is to use the web UI. Go to the [create a new site page](https://app.netlify.com/start), select your project repo from GitHub, GitLab, or Bitbucket, and follow the prompts.

Alternatively, you can use Netlify's [Node based CLI](https://www.netlify.com/docs/cli/) tool to manage and deploy sites on Netlify without leaving your terminal.

You can also add a [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) in your README.file to allow others to create a copy of your repository and be deployed to Netlify via one click.
```

--------------------------------

TITLE: Link Helper Examples
DESCRIPTION: Provides examples of using the `link_to` helper to create hyperlinks, including setting link text, opening in a new tab, and adding CSS classes or IDs.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/helpers.md#_snippet_8>

LANGUAGE: js
CODE:

```
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>
```

LANGUAGE: js
CODE:

```
<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>
```

LANGUAGE: js
CODE:

```
<%- link_to('http://www.google.com', 'Google', {external: true})
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

--------------------------------

TITLE: Install hexo-server
DESCRIPTION: Installs the hexo-server module as a project dependency.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/server.md#_snippet_0>

LANGUAGE: bash
CODE:

```
npm install hexo-server --save
```

--------------------------------

TITLE: Highlight.js Configuration
DESCRIPTION: Configuration example for enabling highlight.js and applying its class prefixes. This setting affects how code blocks are rendered with highlight.js themes.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/syntax-highlight.md#_snippet_9>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Highlight.js Configuration
DESCRIPTION: Configuration example for enabling highlight.js and applying its class prefixes. This setting affects how code blocks are rendered with highlight.js themes.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/syntax-highlight.md#_snippet_9>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Hexo Configuration for Single Deployer
DESCRIPTION: Example of configuring a single deployment method (Git) in the Hexo configuration file (_config.yml). This specifies the type of deployment.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_1>

LANGUAGE: yaml
CODE:

```
deploy:
  type: git
```

--------------------------------

TITLE: Highlight.js Configuration
DESCRIPTION: Configuration example for enabling highlight.js and applying its class prefixes. This setting affects how code blocks are rendered with highlight.js themes.

SOURCE: <https://github.com/hexojs/site/blob/master/source/pt-br/docs/syntax-highlight.md#_snippet_9>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Highlight.js Configuration
DESCRIPTION: Configuration example for enabling highlight.js and applying its class prefixes. This setting affects how code blocks are rendered with highlight.js themes.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/syntax-highlight.md#_snippet_9>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Edgio Deployment
DESCRIPTION: The command to deploy the Hexo project to Edgio after the CLI and connector have been installed and configured.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_23>

LANGUAGE: bash
CODE:

```
edgio deploy
```

--------------------------------

TITLE: Cloning and Setting Up Hexo Repository
DESCRIPTION: Steps to clone the Hexo repository, install dependencies, and update submodules to prepare for development.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/contributing.md#_snippet_0>

LANGUAGE: bash
CODE:

```
git clone https://github.com/<username>/hexo.git
cd hexo
npm install
git submodule update --init
```

--------------------------------

TITLE: Theme Configuration Example
DESCRIPTION: Example YAML content for a theme's configuration file, including description, repository link, preview URL, and tags.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/themes.md#_snippet_2>

LANGUAGE: yaml
CODE:

```
description: A brand new default theme for Hexo.\nlink: https://github.com/hexojs/hexo-theme-landscape\npreview: http://hexo.io/hexo-theme-landscape\ntags:\n  - official\n  - responsive\n  - widget\n  - two_column\n  - one_column
```

--------------------------------

TITLE: Include Code - From Start to Line
DESCRIPTION: Example of including code from the beginning of a file up to a specific line (line 8).

SOURCE: <https://github.com/hexojs/site/blob/master/source/es/docs/tag-plugins.md#_snippet_18>

LANGUAGE: html
CODE:

```
{% include_code lang:javascript to:8 test.js %}
```

--------------------------------

TITLE: Edgio CLI Installation and Initialization
DESCRIPTION: Commands to install the Edgio CLI globally and initialize the Hexo connector for deployment.

SOURCE: <https://github.com/hexojs/site/blob/master/source/es/docs/one-command-deployment.md#_snippet_19>

LANGUAGE: bash
CODE:

```
npm i -g @edgio/cli
```

LANGUAGE: bash
CODE:

```
edgio init --connector=@edgio/hexo
```

--------------------------------

TITLE: Git Installation Commands
DESCRIPTION: Provides commands for installing Git on different Linux distributions.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/index.md#_snippet_3>

LANGUAGE: bash
CODE:

```
sudo apt-get install git-core
```

LANGUAGE: bash
CODE:

```
sudo yum install git-core
```

--------------------------------

TITLE: Run Hexo Server
DESCRIPTION: Starts a local development server for the Hexo website, allowing for live previewing of changes.

SOURCE: <https://github.com/hexojs/site/blob/master/README.md#_snippet_2>

LANGUAGE: bash
CODE:

```
hexo server
```

--------------------------------

TITLE: Install hexo-deployer-ftpsync
DESCRIPTION: Installs the hexo-deployer-ftpsync package for deploying sites via FTP.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/one-command-deployment.md#_snippet_13>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-ftpsync --save
```

--------------------------------

TITLE: Install hexo-server
DESCRIPTION: Installs the hexo-server package as a dependency for your Hexo project.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/server.md#_snippet_0>

LANGUAGE: bash
CODE:

```
npm install hexo-server --save
```

--------------------------------

TITLE: Install Hexo Site Dependencies
DESCRIPTION: Clones the Hexo site repository, navigates into the directory, and installs project dependencies using npm.

SOURCE: <https://github.com/hexojs/site/blob/master/README.md#_snippet_0>

LANGUAGE: bash
CODE:

```
git clone https://github.com/hexojs/site.git
cd site
npm install
```

--------------------------------

TITLE: YAML Front-matter Example
DESCRIPTION: Demonstrates the basic structure of YAML front matter, used for configuring articles in Hexo. It starts and ends with '---'.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/front-matter.md#_snippet_0>

LANGUAGE: yaml
CODE:

```
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

--------------------------------

TITLE: Plugin Installation: Node-Sass Build Errors
DESCRIPTION: Errors like 'node-waf configure build' during plugin installation can occur with plugins written in languages requiring compilation. Ensure you have the necessary compilers (C, C++, etc.) installed on your system.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/troubleshooting.md#_snippet_9>

LANGUAGE: plain
CODE:

```
npm ERR! node-waf configure build
```

--------------------------------

TITLE: Install Hexo CLI
DESCRIPTION: Installs the Hexo command-line interface globally using npm. This is the primary method for installing Hexo.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/index.md#_snippet_0>

LANGUAGE: bash
CODE:

```
npm install -g hexo-cli
```

--------------------------------

TITLE: Hexo Project Folder Structure
DESCRIPTION: A typical directory structure for a Hexo project after initialization.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/setup.md#_snippet_1>

LANGUAGE: plain
CODE:

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

--------------------------------

TITLE: Install Edgio CLI
DESCRIPTION: Installs the Edgio Command Line Interface globally on your system. This is the first step to using Edgio for deployment.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/one-command-deployment.md#_snippet_20>

LANGUAGE: bash
CODE:

```
npm i -g @edgio/cli
```

--------------------------------

TITLE: Tagcloud Examples
DESCRIPTION: Examples demonstrating the usage of the tagcloud helper with default options and with custom options to limit the number of tags displayed.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/helpers.md#_snippet_45>

LANGUAGE: js
CODE:

```
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

--------------------------------

TITLE: URL Configuration Example
DESCRIPTION: Shows how to configure the base URL for the site in the `_config.yml` file, which is used by helpers like `full_url_for`.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/helpers.md#_snippet_9>

LANGUAGE: yml
CODE:

```
root: /blog/ # example
```

LANGUAGE: yml
CODE:

```
relative_link: true
```

LANGUAGE: yml
CODE:

```
url: https://example.com/blog # example
```

--------------------------------

TITLE: Site Configuration Example
DESCRIPTION: A basic example of a Hexo site configuration file (_config.yml). It includes essential settings like site title, language, theme, and timezone.

SOURCE: <https://github.com/hexojs/site/blob/master/scaffolds/post.md#_snippet_0>

LANGUAGE: yaml
CODE:

```
title: {{ title }}
language: en
theme: landscape
timezone: UTC
```

--------------------------------

TITLE: Full URL Helper Example
DESCRIPTION: Illustrates the use of the `full_url_for` helper to prepend the site's base URL to a given path.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/helpers.md#_snippet_4>

LANGUAGE: js
CODE:

```
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

--------------------------------

TITLE: Deploy with Edgio
DESCRIPTION: Deploys the Hexo site using the Edgio CLI.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/one-command-deployment.md#_snippet_21>

LANGUAGE: bash
CODE:

```
edgio deploy
```

--------------------------------

TITLE: Create Post with Custom Layout
DESCRIPTION: Example of creating a post using a specific layout, in this case, 'photo'. Hexo will look for a corresponding scaffold file (e.g., 'photo.md') in the scaffolds folder.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/writing.md#_snippet_2>

LANGUAGE: bash
CODE:

```
hexo new photo "My Gallery"
```

--------------------------------

TITLE: Basic HTML Code Block with Highlight.js Classes
DESCRIPTION: An example of an HTML code block rendered with highlight.js, showing the use of `hljs-` prefixed classes for styling.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/syntax-highlight.md#_snippet_12>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Install Hexo CLI
DESCRIPTION: Installs the Hexo command-line interface globally using npm. This is the primary method for installing Hexo.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/index.md#_snippet_0>

LANGUAGE: bash
CODE:

```
npm install -g hexo-cli
```

--------------------------------

TITLE: Basic HTML Code Block with Highlight.js Classes
DESCRIPTION: An example of an HTML code block rendered with highlight.js, showing the use of `hljs-` prefixed classes for styling.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/syntax-highlight.md#_snippet_12>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Basic HTML Code Block with Highlight.js Classes
DESCRIPTION: An example of an HTML code block rendered with highlight.js, showing the use of `hljs-` prefixed classes for styling.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/syntax-highlight.md#_snippet_12>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Basic HTML Code Block with Highlight.js Classes
DESCRIPTION: An example of an HTML code block rendered with highlight.js, showing the use of `hljs-` prefixed classes for styling.

SOURCE: <https://github.com/hexojs/site/blob/master/source/pt-br/docs/syntax-highlight.md#_snippet_12>

LANGUAGE: html
CODE:

```
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

--------------------------------

TITLE: Permalink and New Post Configuration
DESCRIPTION: Configuration example for permalinks and new post naming conventions, demonstrating how variables from the file name can be used in permalinks. This setup supports creating posts with specific types.

SOURCE: <https://github.com/hexojs/site/blob/master/source/_posts/2014-07-13-hexo-2-8-released.md#_snippet_2>

LANGUAGE: yaml
CODE:

```
permalink: :type/:title/
new_post_name: :type/:title.md
```

--------------------------------

TITLE: url_for Example (with root config)
DESCRIPTION: Shows an example of using the `url_for` tag when a `root` path is defined in the site's configuration.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/tag-plugins.md#_snippet_23>

LANGUAGE: YAML
CODE:

```
root: /blog/ # example
```

LANGUAGE: Liquid
CODE:

```
{% url_for blog index.html %}
```

LANGUAGE: HTML
CODE:

```
<a href="/blog/index.html">blog</a>
```

--------------------------------

TITLE: Hexo Deployer Links
DESCRIPTION: List of links to various Hexo deployer plugins on GitHub, including git, heroku, rsync, openshift, ftpsync, sftp, and rss3.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/one-command-deployment.md#_snippet_22>

LANGUAGE: markdown
CODE:

```
[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
```

--------------------------------

TITLE: Install Hexo Plugins
DESCRIPTION: Commands to install essential Hexo plugins for site generation, serving, and deployment. Users should install plugins based on their specific needs.

SOURCE: <https://github.com/hexojs/site/blob/master/source/_posts/2015-03-05-hexo-3-0-released.md#_snippet_3>

LANGUAGE: bash
CODE:

```
npm install hexo-server --save
npm install hexo-generator-index --save
npm install hexo-generator-archive --save
npm install hexo-generator-category --save
npm install hexo-generator-tag --save
npm install hexo-deployer-git --save
npm install hexo-deployer-heroku --save
npm install hexo-deployer-rsync --save
npm install hexo-deployer-openshift --save
```

--------------------------------

TITLE: URL Helper Examples
DESCRIPTION: Demonstrates the usage of the `url_for` helper with different configurations, including relative links and overriding the default behavior.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/helpers.md#_snippet_2>

LANGUAGE: js
CODE:

```
<%- url_for('/a/path') %>
// /blog/a/path
```

LANGUAGE: js
CODE:

```
<%- url_for('/css/style.css') %>
// ../../css/style.css
```

LANGUAGE: js
CODE:

```
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

--------------------------------

TITLE: Hexo Configuration for `tab_replace`
DESCRIPTION: Configuration example for `tab_replace`, used to replace tab characters within code blocks.

SOURCE: <https://github.com/hexojs/site/blob/master/source/docs/syntax-highlight.md#_snippet_14>

LANGUAGE: yaml
CODE:

```
tab_replace: "    "
```

--------------------------------

TITLE: Edgio CLI Installation and Initialization
DESCRIPTION: Commands to install the Edgio CLI globally and initialize the Hexo connector for deployment. This sets up the project for Edgio hosting.

SOURCE: <https://github.com/hexojs/site/blob/master/source/pt-br/docs/one-command-deployment.md#_snippet_17>

LANGUAGE: bash
CODE:

```
npm i -g @edgio/cli
edgio init --connector=@edgio/hexo
```

--------------------------------

TITLE: Cloning and Installing Hexo Site Repository
DESCRIPTION: Demonstrates the shell commands to clone the Hexo site repository and install its dependencies, a prerequisite for contributing or developing plugins.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ko/docs/plugins.md#_snippet_2>

LANGUAGE: shell
CODE:

```
git clone https://github.com/<username>/site.git\n$ cd site\n$ npm install
```

--------------------------------

TITLE: Tagcloud Helper Examples
DESCRIPTION: Examples demonstrating the usage of the tagcloud helper with default and custom options.

SOURCE: <https://github.com/hexojs/site/blob/master/source/es/docs/helpers.md#_snippet_34>

LANGUAGE: js
CODE:

```
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

--------------------------------

TITLE: Basic Hexo Deployment Command
DESCRIPTION: This is the fundamental command to deploy a Hexo site. It assumes all necessary configurations and plugins are already in place.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ru/docs/one-command-deployment.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo deploy
```

--------------------------------

TITLE: Inicialización de Hexo
DESCRIPTION: Comandos para inicializar un nuevo sitio de Hexo en un directorio específico y luego instalar las dependencias necesarias.

SOURCE: <https://github.com/hexojs/site/blob/master/source/es/docs/setup.md#_snippet_0>

LANGUAGE: bash
CODE:

```
hexo init <folder>
cd <folder>
npm install
```

--------------------------------

TITLE: Bip Initialization and Deployment
DESCRIPTION: Commands to initialize a project with Bip and deploy a Hexo site. Assumes Bip CLI is installed and a Bip domain is available.

SOURCE: <https://github.com/hexojs/site/blob/master/source/es/docs/one-command-deployment.md#_snippet_17>

LANGUAGE: bash
CODE:

```
bip init
```

LANGUAGE: bash
CODE:

```
hexo generate —deploy && bip deploy
```

--------------------------------

TITLE: Install hexo-deployer-rsync
DESCRIPTION: Installs the hexo-deployer-rsync package using npm.

SOURCE: <https://github.com/hexojs/site/blob/master/source/th/docs/one-command-deployment.md#_snippet_9>

LANGUAGE: bash
CODE:

```
npm install hexo-deployer-rsync --save
```

--------------------------------

TITLE: Install Hexo Locally
DESCRIPTION: Installs the Hexo package locally within a project. This allows for running Hexo commands via npx or by setting up the PATH.

SOURCE: <https://github.com/hexojs/site/blob/master/source/ja/docs/index.md#_snippet_1>

LANGUAGE: bash
CODE:

```
npm install hexo
```
