import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const draftMeetingEmail = async (userContext: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert business assistant for a client wanting to contact "MisterEtiquetas".
      MisterEtiquetas is a label manufacturing company in Portugal (Marco de Canaveses), operating for 29 years, specializing in high-quality labels for duvets and pillows.
      
      The user wants to schedule a meeting.
      User's specific need/context: "${userContext}"
      
      Task: Write a professional, polite, and objective email subject and body in PORTUGUESE (PT-PT) that the user can copy and send to "Geral@misteretiquetas.pt".
      The email should request a meeting.
      
      Return ONLY the email body text. Do not add conversational filler before or after.
      Format it clearly so it can be copied.`,
    });

    return response.text || "Erro ao gerar o rascunho. Por favor, tente novamente ou contacte-nos diretamente.";
  } catch (error) {
    console.error("Error drafting email:", error);
    return "Não foi possível gerar o rascunho automático neste momento. Por favor, utilize os botões de contacto direto.";
  }
};