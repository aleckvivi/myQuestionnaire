//问题模型数据定义
export interface QuestionModel{
    title:string;//问题标题（描述）
    type:QuestionType;//问题类型
    options?:any[];//答案选项,某些类型的问题是没有选项的，因此该字段可为空?。选项数据类型不确定，因此类型为any[]
    answer:any;//问题答案
}

//问题的类型：文本题，单选题，多选题，分值题
export const enum QuestionType{
    Text, 
    SingleSelect,
    MultiSelect,
    Score
}