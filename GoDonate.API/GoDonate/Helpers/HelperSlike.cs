﻿namespace GoDonate.Helpers
{
    public static class HelperSlike
    {
        public static byte[] ParsirajUbase(this string slika)
        {
            slika = slika.Split(',')[1];
            return System.Convert.FromBase64String( slika);
        }
    }
}
