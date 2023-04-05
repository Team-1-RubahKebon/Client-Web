export const dateFormat = (dateStr) => {
  if (dateStr) {
    const tanggal = new Date(dateStr);
    const tanggalISO = tanggal.toISOString().split("T")[0];
    return tanggalISO;
  }
};
