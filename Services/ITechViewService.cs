namespace CMartCV_Shell.Services
{
    public interface ITechViewService
    {
        bool IsTechViewShowing { get; }

        event EventHandler TechViewShowingChanged;

        void ToggleTechView();
    }
}
