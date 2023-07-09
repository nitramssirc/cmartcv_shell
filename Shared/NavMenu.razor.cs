using CMartCV_Shell.Services;
using Microsoft.AspNetCore.Components;

namespace CMartCV_Shell.Shared
{
    public partial class NavMenu
    {
        [Inject] private ITechViewService _techViewService { get; set; }       

        private bool collapseNavMenu = true;
        private string? NavBarCssClass => collapseNavMenu ? null : "show";
        private string? NavButtonCssClass => collapseNavMenu ? "collapsed" : null;

        private string TechViewButtonText => _techViewService.IsTechViewShowing ? "View CV" : "View Tech Stack";

        private void ToggleNavMenu()
        {
            collapseNavMenu = !collapseNavMenu;
        }

        private void ToggleTechView()
        {
            _techViewService.ToggleTechView();
            StateHasChanged();
        }
    }
}