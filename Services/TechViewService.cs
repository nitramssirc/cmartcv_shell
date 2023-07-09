namespace CMartCV_Shell.Services
{
    public class TechViewService: ITechViewService
    {
        private bool _isTechViewShowing;
        public bool IsTechViewShowing
        {
            get { return _isTechViewShowing; }
            set
            {
                if (_isTechViewShowing != value)
                {
                    _isTechViewShowing = value;
                    TechViewShowingChanged?.Invoke(this, EventArgs.Empty);
                }
            }
        }

        public event EventHandler TechViewShowingChanged;

        public void ToggleTechView()
        {
            IsTechViewShowing = !IsTechViewShowing;
        }
    }
}
