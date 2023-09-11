export function conflictError(resource = "Item") {
    return {
        type: "conflict",
        message: `${resource}`
    }
}

export function incompleteDataError() {
    return {
        type: "incompleteData",
        message: `Preencha todos os dados!`
    }
}

export function invalidIdError(resource = "Item") {
    return {
        type: "invalid",
        message: `Formato inválido!`
    }
}

export function notFoundError(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não encontrado!`
    }
}