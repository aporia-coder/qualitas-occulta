import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const blogPosts = [
  {
    title: 'The Death Drive',
    body: 'There is something alien inside me. I feel possessed by a radical outsideness,  one that has cursed me with an unquenchable thirst for ferocious self-annihilation and yet paradoxically It is the same impulse that drives me to give birth. I know this force is Other to myself, for when my gaze fixes itself upon the sun, I am blinded, the celestial object that births and sustains all life reveals itself as nothing other than a surplus of explosive destruction and death. This Death drive flows through the sun, just as it does myself and every other being in the universe. After all, we are all stardust and solar rays. If I were to name anything Divine (if uttering words such as God makes your face screw in disgust) it would be this force, a force that uses destruction as a form of creation, death as a means of giving birth... the Christian sacrament of communion, To consume death in order to gain spiritual life is one of the most ludicrously insane yet perfect ideas I have ever come across. Death, destruction, and frenzied annihilation are all creative acts, that is to to say; Death gives birth, and this is the motor of the universe. It is this metaphysical Death drive that has created everything sacred and everything profane, and I cannot seem to quench my thirst for it. To truly feel alive is to be on the brink of death, and this is the curse of the tragic artist. A yearning for divine ecstasy mixed with extreme horror; embodied perfectly by the image of Christ on the cross. I sometimes wonder if I were to gouge out my eyes, would my soul see any clearer?',
  },
]

export const videos = [
  {
    title: 'Aporia - Resurrection (Trailer)',
    url: 'https://www.youtube.com/watch?v=PkJv-OVM-cU',
  },
  {
    title: 'Self / Mind vs World',
    url: 'https://www.youtube.com/watch?v=3I_gzaUAbG0',
  },
]

export const musicData = [
  {
    title: 'Aporia - Resurrection',
    url: 'https://soundcloud.com/aporiatrauma/aporia-resurrection?si=737a170662c54f119a70ccf100726539&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    title: 'Aporia - Flesh',
    url: 'https://soundcloud.com/aporiatrauma/sets/aporia-flesh?si=9e3a5baab9ed4f8497a31cc716d42881&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
]
