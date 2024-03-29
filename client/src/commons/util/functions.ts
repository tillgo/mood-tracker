import { Rating } from '@shared/types'

export const inBounds = (value: number | undefined, min: number, max: number) => {
    const val = value ?? 0
    return val < min ? min : val > max ? max : val
}

export const calculateRating = (rating: Partial<Rating>) => {
    const { mood, focus, success, satisfaction, health, energy } = rating
    return (
        (inBounds(mood, 1, 5) +
            inBounds(focus, 1, 5) +
            inBounds(success, 1, 5) +
            inBounds(satisfaction, 1, 5) +
            inBounds(health, 1, 5) +
            inBounds(energy, 1, 5)) /
        6
    )
}
