import type {Classes} from 'jss'

type MergeClasses = (classes1: Classes, classes2?: Classes) => Classes

export const mergeClasses: MergeClasses = (baseClasses, additionalClasses) => {
    if(!additionalClasses) {
        return baseClasses;
    }

    const combinedClasses = {...baseClasses}

    for (const name in additionalClasses) {
        combinedClasses[name] =
            name in combinedClasses
                ? `${combinedClasses[name]} ${additionalClasses[name]}`
                : additionalClasses[name]
    }

    return combinedClasses
}
