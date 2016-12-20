namespace Tungsten.Models
{
    public interface Entity<TKey>
    {
         TKey Id { get; set; }
    }
}
