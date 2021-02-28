import { grupos } from '../data/grupos'

export const findGroup = ( GrupoABuscar ) => {
   return grupos.find( grupo => grupo.Grupo === GrupoAbuscar )
}