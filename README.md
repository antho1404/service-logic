# Logic

Logical comparisons over data

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  
  - [Tasks](#Tasks)
    - [pick](#pick)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

Download the source code of this service, and then in the service's folder, run the following command:
```bash
mesg-core service deploy
```

# Definitions


# Tasks

## pick

Task key: `pick`

Pick data when conditions are met

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **oneOf** | `oneOf` | `Object` | Pick one of the data |
| **otherwiseUse** | `otherwiseUse` | `Any` | **`optional`** Data to pick if non of the conditions aren't met. |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Any` | Filled from 'use' or 'otherwiseUse' input parameters or with empty object data by default |


