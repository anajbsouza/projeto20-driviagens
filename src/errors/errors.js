export function conflictError(resource = "Item") {
    return {
        type: "conflict",
        message: `${resource} já existe!`
    }
}

export function incompleteDataError() {
    return {
        type: "incompleteData",
        message: `Preencha todos os dados!`
    }
}

export function invalidIdError() {
    return {
        type: "invalidId",
        message: `ID inválido! Deve ser um número inteiro maior que zero.`
    }
}

export function notFoundError(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não encontrado!`
    }
}