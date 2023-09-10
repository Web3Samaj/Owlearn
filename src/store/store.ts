import { create } from 'zustand'
import { IUploadComp, IrestInput } from '../utils/interface'

const store = (set: any) => ({
  courseData: {
    videoWithTitle: [] as IUploadComp[],
    otherInputs: {} as IrestInput,
  },
  setCourseData: (vidWTitle: IUploadComp[], restInp: IrestInput) =>
    set(() => ({
      courseData: { videoWithTitle: vidWTitle, otherInputs: restInp },
    })),
})

export const useStore = create(store)
