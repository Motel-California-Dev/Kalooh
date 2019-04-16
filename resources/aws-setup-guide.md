# Getting Started with AWS
## Setting up a server and a database

---

### Table of Contents
1. [Pre-Setup](#user-content-pre-setup)
    1. [Install AWS CLI](#user-content-aws-cli)
        1. [Install Python3+ and pip](#user-content-1-install-python3-and-pip)
        1. [Install AWS CLI](#user-content-2-install-the-aws-cli-with-pip)

---
---

**NOTE:** For the entirety of the guide, `>>> <some command here>` will represent a command-line action, `>>>` represents the prompt, and is not actually part of the command itself. Lines not prefixed with `>>>` represents output.

---

## Step 1: Pre-Setup 
### Install AWS CLI
This is the command-line tool provided by AWS that allows you to access your resources. For our purposes, we need to use it to upload Docker images to ECR (Elastic Container Repository), which is like a Github, *but for containers*.

**At-a-glance**: 
1. Install Python3+ and pip
2. Install AWS CLI

---

## 1. Install Python3+ and pip 
Try running:
```
>>> python3 --version
```
If it prints out something like `Python 3.x.x`, then you've already got Python 3+ installed.

If not, then run the following:
```
>>> sudo apt update
>>> sudo apt install python3.6
>>> sudo apt install python3-distutils # Necessary for the next command
>>> curl -s https://bootstrap.pypa.io/get-pip.py | sudo -H python3.6
```

This will install Python3.6, as well as `pip` for Python3.6, which is a package manager for Python.

Test your versions of both by running:
```
>>> python3.6 --version
Python 3.6.7
>>> (pip -V && pip3 -V && pip3.6 -V) | uniq # pip, pip3, and pip3.6 should all point to the same location because of the bootstrap script above. "uniq" is a function that filters out duplicated outputs.
pip 19.0.3 from /usr/local/lib/python3.6/dist-packages/pip (python 3.6)
```

## 2. Install the AWS CLI with `pip`
Install `awscli` with `pip`.
```
>>> pip3 install awscli --upgrade --user
```

Check that the installation succeeded by running:
```
>>> aws --version
```

---

#### Troubleshooting
---
If you get an error like "Command not found", then you need to add `aws` to your `PATH`. If you ran the commands above, the `aws` executable should be located in `~/.local/bin/aws` as a file (not a directory).

Run the following commands:

```
>>> ls ~/.local/bin/aws | grep aws # Check if the file is in the right directory
/home/<you>/.local/bin/aws
>>> echo PATH=~/.local/bin/aws:$PATH >> ~/.bashrc && source ~/.bashrc
```

Then, try testing again:

```
>>> aws --version
aws-cli/1.16.140 Python/3.6.7 Linux/4.15.0-47-generic botocore/1.12.130
```

---
---



